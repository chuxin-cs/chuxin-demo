import http2Proxy from 'http2-proxy';
import type { Plugin, PluginOption, ProxyOptions } from 'vite';

const error = (message: string): never => {
  throw new Error(message);
};

export default (options?: Record<string, ProxyOptions>): PluginOption => {
  let routes: Record<string, ProxyOptions>;

  const configure: Plugin['configureServer'] = ({ middlewares, httpServer }) => {
    const proxyOptions = options || routes;
    for (const [regexp, serverOptions] of Object.entries(proxyOptions)) {
      const { target, rewrite, headers, ws, secure = true, timeout = 30_000 } = serverOptions;
      if (!target) {
        continue;
      }

      const re = new RegExp(regexp);
      const urlObj = new URL(target.toString());

      if (!urlObj.pathname.endsWith('/')) {
        urlObj.pathname += '/';
      }

      const protocol = /^(http|ws)s?:$/.test(urlObj.protocol)
        ? (urlObj.protocol as 'https' | 'http')
        : error(`Invalid protocol: ${urlObj.href}`);

      const port =
        urlObj.port === ''
          ? { https: 443, http: 80 }[protocol]
          : /^\d+$/.test(urlObj.port)
            ? Number(urlObj.port)
            : error(`Invalid port: ${urlObj.href}`);

      // TODO unfinished
      if (ws && httpServer) {
        httpServer?.on('upgrade', (req, socket, head) => {
          if (req.url && re.test(req.url)) {
            const url = (rewrite?.(req.url) ?? req.url).replace(/^\/+/, '');
            const { pathname, search } = new URL(url, urlObj);

            http2Proxy.ws(
              req,
              socket,
              head,
              {
                port: 443,
                path: pathname + search,
                proxyTimeout: timeout,
                hostname: urlObj.hostname,
                ['rejectUnauthorized' as never]: secure,
                ...serverOptions,
              },
              (err) => {
                if (err) {
                  console.error('proxy error', err);
                  socket.destroy();
                }
              },
            );
          }
        });
      } else {
        middlewares.use((req, res, next) => {
          if (req.url && re.test(req.url)) {
            const url = (rewrite?.(req.url) ?? req.url).replace(/^\/+/, '');
            const { pathname, search } = new URL(url, urlObj);

            http2Proxy.web(
              req,
              res,
              {
                protocol,
                port,
                hostname: urlObj.hostname,
                path: pathname + search,
                proxyTimeout: timeout,
                onReq: async (_, options) => {
                  options.headers = {
                    ...options.headers,
                    ...headers,
                  };
                },
                ['rejectUnauthorized' as never]: secure,
                ...serverOptions,
              },
              (err) => err && next(err),
            );
          } else {
            next();
          }
        });
      }
    }
  };

  // @ts-ignore
  return {
    name: '@admin-pkg/vite-plugin-http2-proxy',
    config: (config) => {
      const { server } = config;
      routes = Object.entries(server?.proxy ?? {}).reduce(
        (prev, [key, value]) => {
          if (typeof value === 'string') {
            prev[key] = {
              target: value,
            };
          } else {
            prev[key] = value;
          }
          return prev;
        },
        {} as Record<string, ProxyOptions>,
      );

      if (server) {
        // https://cn.vitejs.dev/config/server-options#server-https
        Reflect.deleteProperty(server, 'proxy');
      }
      return config;
    },
    configureServer: configure,
    // @ts-ignore
    configurePreviewServer: configure,
  };
};

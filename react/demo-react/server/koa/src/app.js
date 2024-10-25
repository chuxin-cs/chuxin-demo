import Koa from "koa"
import KoaBodyParser from 'koa-bodyparser';
import cors from '@koa/cors'
import Router from 'koa-router'

/**
 * 跨域支持
 * @param app koa实例
 */
function applyCors(app) {
    app.use(cors());
}

/**
 * 解析Body参数
 * @param app koa实例
 */
function applyBodyParse(app) {
    app.use(KoaBodyParser());
}

/**
 * 初始化Koa实例
 */
async function createApp() {
    const app = new Koa();
    applyBodyParse(app);
    applyCors(app);

    const router = new Router();
    // GET 路由
    router.get('/user/getUser', async (ctx) => {
        ctx.body = {
            code: 200, list: [1, 2, 3]
        };
    });

    // 使用路由中间件
    app.use(router.routes()).use(router.allowedMethods());

    return app;
}


export default createApp;

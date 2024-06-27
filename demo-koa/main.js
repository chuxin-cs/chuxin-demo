const Koa = require("koa");
const Router = require("koa-router");

// 实例化 koa
const app = new Koa();
const router = new Router();

app.use(async (ctx) => {
  ctx.body = "Hello Koa";
});

router.get("/add", (ctx) => {
  ctx.body = {
    key: "hello koa-router",
  };
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

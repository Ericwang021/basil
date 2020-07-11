// Import prerequisite packages
const next = require("next");
const Koa = require("koa");
const Router = require("koa-router");

// Initialize NextJs instance and expose request handler
const dev = process.env.NODE_ENV !== "production"; //判斷是否處於開發者模式
const app = next({ dev }); //初始化 next.js， 判斷是否處於 dev：開發者狀態，或是production: 正式服務狀態
const handle = app.getRequestHandler(); //拿到 http 請求的響應

const PORT = 3000;
app.prepare().then(() => {
	// Initialize KoaJs server and router
	const server = new Koa();
	const router = new Router();

	server.use(async (ctx, next) => {
		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	server.listen(PORT, () => {
		console.log(`koa server listening on ${PORT}`);
	});
});

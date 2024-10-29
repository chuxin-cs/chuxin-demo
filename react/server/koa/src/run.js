import createApp from "./app.js";

const port = 6100;

const run = async () => {
    const app = await createApp();
    app.listen(port, () => {
        console.log(`listening at http://localhost:${port}`);
    });
}

// 启动应用
run().then();

const program = require("commander");

const createCommander = () => {
    program
        .command("create <project> [outer...]")
        .description("创建项目~")
        .action((project,others)=>{
            console.log(project,others);
        })
}

module.exports = createCommander;
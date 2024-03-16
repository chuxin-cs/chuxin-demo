#!/usr/bin/env node

const fs = require("fs");
const ejs = require("ejs");
const prompts = require("prompts");
const minimist = require("minimist");
const { program } = require("commander");
const download = require("download-git-repo");

const pkg = require("../package.json");
const createCommander = require("./core/createCommander");

program.version(`1.0.1`, "-v --version").usage("<command> [options]");

program
  .command("init <app-name> [git...]")
  .description("创建一个新的项目 例如: chuxin-cli init v3-project")
  .action(async (name, git) => {
    console.log(name, git);
  });

program
  .command("create <modules-name>")
  .description("新建一个模块 例如: chuxin-cli create user")
  .action(async (name) => {
    console.log(name);
  });

program.parse(process.argv);

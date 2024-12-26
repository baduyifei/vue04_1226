/** @format */

const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		open: true, // 启动服务的时候,自动打开浏览器
	},
	lintOnSave: false, // 代码重新编译的时候,不需要 eslint 代码格式校验
});

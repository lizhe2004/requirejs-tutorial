requirejs(["helper/util"],function(util){
	// 本函数会在 js/helper/util.js文件加载完成以后被调用
	//如果util。js调用了define()，那么直到util的所有依赖包都加载完成以后，
	//本方法才会被触发。util参数会代表"helper/util"模块的值
	util();
})


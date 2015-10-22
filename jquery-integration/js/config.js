requirejs.config({
	baseUrl: "../js/lib",
	paths:{
		
		jquery: 'jquery/jquery-2.1.4'
		//	jquery: 'http://patent.qiyi.domain/static/jquery/jquery-1.7.1'
	}
})


require(["jquery"],function (jquery2){
	
	type= jQuery.type("string2");
	alert(type);
	type= jquery2.type("string2");
	alert(type);
	 
})
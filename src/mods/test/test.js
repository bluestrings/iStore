KISSY.add(function(S, Base){

	var test = Base.extend({
	
		initializer: function() {
			alert("init");
		},
		
	}, {ATTRS:{
		
	}});
	
	return test;
},{requires:["base"]})
/**
 * @fileoverview IStore - Index.
 * @author 
 */
/**
 * KISSY.use('iStore/pages/index/index',function(S,Index){
 *		new Index();
 * });
 */
KISSY.add(function(S,Base) {

	var Index = Base.extend({
		initializer:function(){
			var self = this;

			// Your Code
			alert('ok');
		}
	},{
		ATTRS: {
			A:{
				value:'abc'
			}
		}
	});

	return Index;
	
},{
	requires:['base']	
});

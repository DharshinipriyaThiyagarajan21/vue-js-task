var app=new Vue({
    el: '#app',
    data: {
    	widthVal: '',
    	heightVal: '',
    	item: '',
    	items: [],
    },
    methods: {
    	insert: function(){
    		var value1=this.widthVal;
    		var value2=this.heightVal;
    		var widthvalue="width:"+value1;
    		var heightvalue="height:"+value2;
       		item= '<div class="grid-item"  style=' +widthvalue+ ";" +heightvalue+'></div>'
      		this.items.push(item);
      		$(".grid").append(item);
    	}

    }
})

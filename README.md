#jquery.imageLoaderInfo

Jquery plugin for get info about loading images

## How to use
```
$("div").imageLoaderInfo({
		loadedItem:function (item){
			console.log ("complete to load " + item.index());
		},
		error:function (item){
			console.log ("image load error");
		},
		complete:function (){
			console.log ("complete to load images in div");
		}
	});
```

## Browser Support
– Google Chrome  
– Safari ( Desktop and Mobile )  
– Internet Explorer  
– Firefox

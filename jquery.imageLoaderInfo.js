(function ($) {
	var ImageLoaderInfo = function (element, options) {
		console.log (element);
		// Settings
		var settings = $.extend({
			complete: function () {},
			loadedItem: function () {}
		}, options || {});
		// Public method - preload
		this.preload = function () {
			console.log ('loading....');
			var data = {};
			data.total = element.find('.imagem').size();
			data.count = 0;
			element.find("img").each(function () {
				var img = $(this);
				var item = img.closest('.item');
				var image = new Image();
			    image.onload = function() {
					data.count++;
					settings.loadedItem(item);
					if (data.total == data.count) {
						settings.complete(data);
					}
			    };
			    image.src = img.attr('src');
			});
		};
		this.preload();
	};
	$.fn.imageLoaderInfo = function (parameter) {
		var params = arguments;
		var method = typeof parameter == 'string' ? parameter : null;
		return this.each(function () {
			if (!$(this).data("imageLoaderInfo")) {
				$(this).data("imageLoaderInfo", new ImageLoaderInfo($(this), parameter));
			} else if (method) {
				$(this).data("imageLoaderInfo")[method](params[1]);
			}
		});
	};
})(jQuery);

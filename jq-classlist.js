/**
 *	Usage:
 *	var classList = $("body");
 *	// ["class1", "class2", "class3"]
 */
$.fn.classList = function() {
	var el = this[0];
	return el.className.split(/\s+/);
};


/**
 *	Usage:
 *	<div class="sidebar span5">..</div>
 *	$(".sidebar").removeClassLike("span");
 *	// <div class="sidebar">..</div>
 */
$.fn.removeClassLike = function(like) {
	return this.each(function (i, el) {
		var $el = $(el);
		var classList = $el.classList();
		for (var i = 0; i < classList.length; i++) {
			if (classList[i].indexOf(like) != -1) {
				$el.removeClass(classList[i]);
			}
		}
	});
};
jq-classlist
============

jQuery class name manipulation helpers.

classList usage:
============
var classList = $("body");

// ["class1", "class2", "class3"]

removeClassLike usage:
============
div class="sidebar span5"

$(".sidebar").removeClassLike("span");

// div class="sidebar"
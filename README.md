jq-classList
============

jQuery class name manipulation helpers.

classList usage:
============
var classList = $("body");
// ["class1", "class2", "class3"]

removeClassLike usage:
============
&ltdiv class="sidebar span5"&gt...&lt/div&gt
$(".sidebar").removeClassLike("span");
// &ltdiv class="sidebar"&gt..&lt/div&gt
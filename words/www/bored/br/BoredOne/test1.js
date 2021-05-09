/* ================================================================ 
Copyright (c) 2011 Stu Nicholls - stunicholls.com. All rights 
reserved.  This script and the associated html may be modified 
in any way to fit your requirements. 
=================================================================== */

$(document).ready(function () { timer=0; collapse = 1000; $('.menu').height($('.menu > ul').height());


$('.menu li a').mouseover(function (event) { if (this == event.target) { $(this).parent().toggleClass('clicked').children('ul').animate({ width: 'show' }); $(this).siblings().children().removeClass('clicked').find('ul').animate({ width: 'hide' }); $(this).parent().siblings().removeClass('clicked').find('ul').animate({ width: 'hide' }); } }).addClass('fly');

$('.menu li:not(:has(ul)) a').mouseout(function (event) { if (this == event.target) { $(this).parent().removeClass('clicked'); $(this).siblings().children().removeClass('clicked').find('ul').animate({ width: 'hide' }); $(this).parent().siblings().removeClass('clicked').find('ul').animate({ width: 'hide' }); } }).removeClass('fly');

$(".menu").mouseover(function() { clearTimeout(timer); });

$(".menu").mouseout(function() { timer = window.setTimeout(function(){ $('.menu li > a').siblings().children().removeClass('clicked').find('ul').fadeOut(); $('.menu li > a').parent().siblings().removeClass('clicked').find('ul').fadeOut(); }, collapse); });

});
jQuery(document).ready(function($){var e=new ScrollMagic({globalSceneOptions:{triggerHook:"onEnter",duration:2*$(window).height()}});(new ScrollScene).setTween(TweenMax.fromTo("#page-title-area .banner",1,{css:{"background-position":"50% 40%"},ease:Linear.easeNone},{css:{"background-position":"50% -40%"},ease:Linear.easeNone})).addTo(e),$(".widget_advanced_menu .menu>li.current-menu-item,.widget_advanced_menu .menu>li.current-menu-ancestor").addClass("open"),$(".widget_advanced_menu .menu>li").prepend(function(){return $(this).hasClass("menu-item-has-children")?$(this).hasClass("open")?'<i class="fa fa-minus"></i>':'<i class="fa fa-plus"></i>':""}),$(".widget_advanced_menu .menu>li>i").click(function(){var e=$(".widget_advanced_menu .menu>li.open"),n=$(this).parent();e.removeClass("open").find("i").removeClass("fa-minus").addClass(function(){return $(this).parent().hasClass("menu-item-has-children")?"fa-plus":void 0}),n.addClass("open").find("i").removeClass("fa-plus").addClass(function(){return $(this).parent().hasClass("menu-item-has-children")?"fa-minus":void 0})})});
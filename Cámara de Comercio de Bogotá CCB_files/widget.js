!function(){function t(t,e){var i=document.body||document.head,n=document.createElement("script");n.src=t,n.async=!0,n.id="a11yWidgetSrc",e&&(n.crossOrigin="anonymous",n.integrity=e),i.appendChild(n)}function e(){var t=document.createElement("iframe");t.title="Online scanning alert",t.setAttribute("style","width:100%!important;height:100%!important;position:fixed!important;left:0!important;right:0!important;top:0!important;bottom:0!important;z-index:999999"),document.body.appendChild(t),t.src=o+"scan_error.html",window.addEventListener("message",function(e){e.data&&"scan-alert-dismiss"===e.data.action&&a.indexOf(e.origin)>=0&&t.remove()})}try{var i=document.querySelector("html"),n="data-uw-w-loader";if(i&&i.hasAttribute(n))return;i.setAttribute(n,"")}catch(t){}var a="https://cdn.userway.org/",o=a+"widgetapp/",r=o+"2024-05-10-12-03-58/widget_app_base_1715342638247.js",d=o+"2024-05-10-12-03-58/widget_app_1715342638247.js",s="sha256-MoZJ1NUTqIBjN6ibf6VW6ftMCkb3X9iVomz1DVofXZc=";if(location.origin&&location.origin.indexOf(atob("LndlYmFpbS4="))>-1||location.origin&&location.origin.indexOf(atob("YWNzYmFjZQ=="))>-1)setTimeout(function(){e()},1e3);else{if(!new RegExp("(bot|crawler)","i").test(navigator.userAgent)){var c=window._userway_config;navigator.userAgent.match(/mobile/i)&&c&&("false"===c.mobile||!1===c.mobile)||(!function(){try{UserWayWidgetApp={};var t=Object.keys(localStorage).filter(function(t){return 0===t.indexOf("userway-s")}).length>0,e=!!localStorage.getItem("isCypress");(t||e||/Edge\/|Trident\/|MSIE/.test(navigator.userAgent))&&(r=d,s="sha256-ISmGqXwBKAmwFxxAKdHO7pY6XBs/CrJdGEZqzNmSREA=",UserWayWidgetApp.lazyLoaded=!0)}catch(t){}}(),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){return t(r,s)}):t(r,s))}}}();
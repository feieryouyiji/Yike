var Yike=angular.module("Yike",["ngRoute","Controllers","Directives"]);Yike.config(["$routeProvider",function(o){o.when("/today",{templateUrl:"./views/today.html",controller:"TodayController"}).when("/older",{templateUrl:"./views/older.html",controller:"OlderController"}).when("/author",{templateUrl:"./views/author.html",controller:"AuthorController"}).when("/category",{templateUrl:"./views/category.html",controller:"CategoryController"}).when("/favourite",{templateUrl:"./views/favourite.html",controller:"FavouriteController"}).otherwise({redirectTo:"/today"})}]),Yike.run(["$rootScope",function(o){o.collapsed=!1,o.toggle=function(){o.collapsed=!o.collapsed;var e=document.querySelectorAll(".navs dd");if(o.collapsed)for(var t=0;t<e.length;t++)e[t].style.transform="translate(0)",e[t].style.transitionDelay="0.2s",e[t].style.transitionDuration=.15*(t+1)+"s";else for(var l=e.length-1,r=l;r>0;r--)e[r].style.transform="translate(-100%)",e[r].style.transitionDelay="",e[r].style.transitionDuration=.15*(l-r)+"s"}}]),angular.module("Controllers",[]).controller("DemoController",["$scope",function(o){console.log("启动了")}]).controller("NavController",["$scope",function(o){o.navs=[{link:"#/today",text:"今日一刻",icon:"icon-home"},{link:"#/older",text:"往期内容",icon:"icon-file-empty"},{link:"#/author",text:"热门作者",icon:"icon-pencil"},{link:"#/category",text:"栏目浏览",icon:"icon-menu"},{link:"#/favourite",text:"我的喜欢",icon:"icon-heart"}]}]).controller("TodayController",["$scope","$http","$filter","$rootScope",function(o,e,t,l){var r=t("date")(new Date,"yyyy-MM-dd");l.title="今日一刻",l.index=0,l.loaded=!1,e({url:"./api/today.php",method:"get",params:{today:r}}).success(function(e){l.loaded=!0,o.date=e.date,o.posts=e.posts})}]).controller("OlderController",["$scope","$http","$rootScope",function(o,e,t){t.title="往期内容",t.index=1,t.loaded=!1,e({url:"./api/older.php"}).success(function(e){t.loaded=!0,console.log(e),o.date=e.date,o.posts=e.posts})}]).controller("AuthorController",["$scope","$http","$rootScope",function(o,e,t){t.title="热门作者",t.index=2,t.loaded=!1,e({url:"./api/author.php"}).success(function(e){t.loaded=!0,o.authors=e.authors})}]).controller("CategoryController",["$scope","$http","$rootScope",function(o,e,t){t.title="栏目浏览",t.index=3,t.loaded=!1,e({url:"./api/category.php"}).success(function(e){t.loaded=!0,console.log(e),o.columns=e.columns})}]).controller("FavouriteController",["$scope","$http","$rootScope",function(o,e,t){t.title="往期内容",t.index=4,t.loaded=!1,e({url:"./api/favourite.php"}).success(function(o){t.loaded=!0,console.log(o)})}]),angular.module("Directives",[]).directive("loading",function(){return{restrict:"A",replace:!0,template:'<img src="" alt="" />'}});
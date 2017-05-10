
//  实例一个模块，用来专门管理所有的指令
angular.module('Directives', [])

// 自定义指令
.directive('loading', function () {
	return {
		restrict: 'A',
		replace: true,
		template: '<img src="" alt="" />'
	}
});
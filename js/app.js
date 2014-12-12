
angular.module('myApp', [
  'ngMaterial',
  'pusher-angular'
]).controller('myController', ['$scope','$pusher',function($scope,$pusher) {
	var client = new Pusher('62362d4fe56c3f10f0c6');
    var pusher = $pusher(client);
	var my_channel = pusher.subscribe('sentibot');

	$scope.messages = []

	my_channel.bind('tweet', function(data){
		console.log(data);
		$scope.messages.push(data);
	}
	);

}]);
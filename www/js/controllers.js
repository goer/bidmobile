angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('BidCtrl',function($scope,socket){
	

	$scope.bid = {
    	'name' : '',
    	'price_min' : 0,
    	'price_max' : 0,
    	'latest_price' : 0,
    	'latest_bidder' : '',
    };

    $scope.reqbid = {
    	'user' : 'goer',
    	'price' : 0.0
    }

	socket.on('bid:update',function(data){
		console.log(data);
		$scope.bid = data;
	});

	$scope.sendBid = function(){
		socket.emit('client:bid', $scope.reqbid);
		console.log('client:bid' + $scope.reqbid);	
	};


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

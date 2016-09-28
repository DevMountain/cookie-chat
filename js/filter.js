angular.module('chatroom').filter('reverse', function(){
    return function(items) {
    return items.slice().reverse();
  };
});

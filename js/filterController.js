toDoList.controller('FilterController', [function() {

  var self = this;
  self.filter = 'all';

  this.selectFilter = function(setFilter){
    self.filter = setFilter;
  };

  this.isSelected = function(checkFilter){
    return self.filter === checkFilter;
  };

}]);
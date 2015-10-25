toDoList.controller('FilterController', [function() {

  var self = this;
  self.tab =1;

  this.selectTab = function(setTab){
    self.tab = setTab;
  };

  this.isSelected = function(checkTab){
    return self.tab === checkTab;
  };

}]);
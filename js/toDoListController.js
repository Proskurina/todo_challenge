toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.list = [];
  self.task = {};

  self.addTask = function(){
    if (self.task) {
      var newTask = self.task
      newTask.done = 'active'
      self.list.push(newTask);
      self.task = {};
    };
  };

  self.deleteTask = function(task){
    var index = self.list.indexOf(task);
    if (index != -1) {
      self.list.splice(index, 1);
    };
  };

  self.deleteAll = function(task){
    self.list = [];
  };

}]);
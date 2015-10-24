toDoList.controller('ToDoListController', [function() {

  var self = this;

  self.list = [];

  self.addTask = function(){
    if (self.newTask) {
      self.list.push(self.newTask);
      self.newTask = '';
      console.log(self.list)
    };
  };

  self.deleteTask = function(task){
    var index = self.list.indexOf(task);
    if (index != -1) {
      self.list.splice(index, 1);
    };
  };

}]);
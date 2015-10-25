describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    listCtrl = $controller('ToDoListController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(listCtrl.list).toEqual([]);
    expect(listCtrl.task).toEqual({});
  });


});
describe('ToDo List', function() {

  var searchBox = element(by.model('listCtrl.task.entry'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:3000');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('ToDo List');
  });

  it('can enter a task', function() {
    searchBox.sendKeys('write a test');
    searchButton.click();
    expect(element(by.className('ng-binding')).getText()).toContain('write a test active');
  });


});
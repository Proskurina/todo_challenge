describe('ToDo List', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');
    expect(browser.getTitle()).toEqual('ToDo List');
  });
});
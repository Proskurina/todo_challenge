ToDo List

I used basic Angular and a little bit of Bootstrap, also used Node and Express as a server.
To start the server do `npm start` or `node server.js`.
Website can be found on localhost:3000.

Tests with karma (jasmine, phantome), and protractor.

To start karma tests : `karma start test/karma.conf.js`

To start protractor tests :

- first `webdriver-manager start`
- then start the server `npm start` or `node server.js`
- then `protractor test/e2e/conf.js`

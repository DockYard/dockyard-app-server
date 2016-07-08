'use strict';

const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: '/Users/bcardarella/projects/dockyard.com/dist'
});

server.start();

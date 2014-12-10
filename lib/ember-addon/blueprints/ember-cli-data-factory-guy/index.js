'use strict';

var EOL = require('os').EOL;

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-data-factory-guy', '~0.8.4');
  }
};

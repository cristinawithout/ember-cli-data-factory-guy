'use strict';

var EOL = require('os').EOL;

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    this.insertIntoFile('tests/.jshintrc',
      '    "FactoryGuy",', {
        after: '"predef": [' + EOL
      }
    );

    return this.addBowerPackageToProject('ember-data-factory-guy', '~0.8.4');
  }
};

'use strict';

var EOL         = require('os').EOL;

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    this.insertIntoFile('tests/.jshintrc', 
        '    "FactoryGuyTestMixin",' + EOL + '    "FactoryGuy",',
        {after: '"predef": [' + EOL}
    );
      
    return this.addBowerPackageToProject('ember-data-factory-guy', '~0.7.0'); 
  }
};


'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-data-factory-guy', '~0.7.0');
  }
};


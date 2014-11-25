var path = require('path');

module.exports = {
  name: 'Ember CLI Data Factory Guy',

  blueprintsPath: function () {
    return path.join(__dirname, 'blueprints');
  },

  included: function (app) {
    this._super.included(app);

    // ember-data must be imported before ember-data-factory-guy.
    this.app.import({
      development: app.bowerDirectory + '/ember-data/ember-data.js',
      test: app.bowerDirectory + '/ember-data/ember-data.js'
    }, {exports: {'ember-data': ['default']}});

    this.app.import({
      development: app.bowerDirectory + '/ember-data-factory-guy/dist/ember-data-factory-guy.js',
      test: app.bowerDirectory + '/ember-data-factory-guy/dist/ember-data-factory-guy.js'
    });
  }
};

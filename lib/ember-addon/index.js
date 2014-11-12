var path = require('path');

module.exports = {
  name: 'Ember CLI Data Factory Guy',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    if (app.tests) {
      // ember-data must be imported before ember-data-factory-guy.
      var options = {
        exports: {
          'ember-data': [
            'default'
          ]
        }
      };

      this.app.import({
        development: app.bowerDirectory + '/ember-data/ember-data.js',
        production: app.bowerDirectory + '/ember-data/ember-data.prod.js'
      }, options);

      app.import({
        development: app.bowerDirectory + '/ember-data-factory-guy/dist/ember-data-factory-guy.js',
        production: app.bowerDirectory + '/ember-data-factory-guy/dist/ember-data-factory-guy.min.js'
      });
    }
  }
};
var path = require('path');

module.exports = {
  name: 'Ember CLI Data Factory Guy',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/jquery-mockjax/jquery.mockjax.js');

    app.import('bower_components/ember-data-factory-guy/dist/amd/factory-guy.js', {
      exports: {
        'factory-guy': [
          'default',
          'modelDefinition',
          'sequence',
          'testMixin'
        ]
      }
    });
  }
};

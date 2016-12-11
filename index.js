/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pdf-object',

  included: function(app) {

    this._super.included.apply(this, arguments);
    app.import(app.bowerDirectory + '/pdfobject/pdfobject.js');
    app.import('vendor/ember-cli-pdf-object/shim.js', {
      type: 'vendor',
      exports: { 'pdfobject': ['default'] }
    });
  }
};

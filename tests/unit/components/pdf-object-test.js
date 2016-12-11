import startApp from '../../helpers/start-app';
import { test, moduleForComponent } from 'ember-qunit';

var App;

moduleForComponent('pdf-object', 'PDFObjectComponent', {
  unit: true,
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('returns default options', function(assert) {
  var options = this.subject().getOptions();

  assert.equal('#pdf-object', this.subject().get('target'));
  assert.equal("/ember-cli-pdf-object/sample-3pp.pdf", this.subject().get('url'));

  assert.equal("100%", options.height);
  assert.equal("100%", options.width);
  assert.equal(null, options.id);
  assert.equal(null, options.page);

});

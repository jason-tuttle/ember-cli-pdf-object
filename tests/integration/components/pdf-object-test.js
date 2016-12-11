import hbs from 'htmlbars-inline-precompile';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('ember-cli-pdf-object', 'Integration PDFObject', {
  integration: true
});

test('renders pdf object', function(assert) {
  this.render(hbs`
    {{pdf-object}}
  `);

  var pdfObject = $(".pdfobject");
  assert.equal(pdfObject.attr('src'), '/ember-cli-pdf-object/sample-3pp.pdf');
  assert.equal(pdfObject.attr('type'), 'application/pdf');
});

test('does not render pdf object when target does not exist', function(assert) {
  this.set('target', '#target');
  this.render(hbs`
    {{pdf-object target=target}}
  `);

  var pdfObject = $(".pdfobject");
  assert.equal(pdfObject.attr('src'), null);
});

test('binds passed attrs', function(assert) {
  this.setProperties({
    url: 'pdf-object.pdf',
    width: "50%",
    height: "75%"
  });
  this.render(hbs`
    {{pdf-object url=url width=width height=height}}
  `);

  var pdfObject = $(".pdfobject");
  assert.equal(pdfObject.attr('src'), "pdf-object.pdf");
  assert.equal(pdfObject.attr('style'), "overflow: auto; width: 50%; height: 75%;");
});

import Ember     from 'ember';
import PDFObject from 'pdfobject';

export default Ember.Component.extend({
  elementId: "pdf-object",
  classNameBindings: ["class"],

  url:           "/ember-cli-pdf-object/sample-3pp.pdf",
  target:        "#pdf-object",
  page:          null,
  id:            null,
  pdfOpenParams: null,
  pdfJsUrl:      null,
  forcePDFJS:    false,
  width:         "100%",
  height:        "100%",

  fallbackLink: "<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>",

  setupPdfObject: Ember.on('didInsertElement', function() {
    PDFObject.embed(
      this.get("url"),
      this.get('target'),
      this.getOptions()
    );
  }),

  getOptions() {
    var options = {};
    options.page          = this.get('page');
    options.id            = this.get('id');
    options.width         = this.get('width');
    options.height        = this.get('height');
    options.pdfOpenParams = this.get('pdfOpenParams');
    options.PDFJS_URL     = this.get('pdfJsUrl');
    options.forcePDFJS    = this.get('forcePDFJS');
    options.fallbackLink  = this.get('fallbackLink');

    return options;
  },
});

# Ember PDFObject

Adds [PDFObject](https://pdfobject.com/) component to your Ember app. It is designed to work well with the way we build Ember apps, and follows idiomatic patterns.

PDFObject is a lightweight JavaScript utility for dynamically embedding PDFs in HTML documents.


## Installation
Ember PDFObject works in Ember 2.3.1+, beta and canary with no deprecations whatsoever. Any deprecation will be considered a bug.

As any other ember-cli addon, run:

`ember install ember-cli-pdf-object`

## Usage
It's as simple as using an ember component:
`{{pdf-object}}`

Several properties can be passed down to the component and they're all optional. Here is a list them:

* `page`
* `id`
* `width`
* `height`
* `fallbackLink`
* `pdfOpenParams`
* `pdfJsUrl`
* `forcePDFJS`

You can read more about each property on [PDFObject Options seciton](https://pdfobject.com/#options).

## Running Tests

Run `ember test --server`

## Building

Run `ember build`

## Browser Support
This component was just tested it in modern browsers but there is no technical reason it wouldn't work in IE9+. If you find any problem please file an issue.

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Author
[Ziyad  Al-Obaidi](http://ziyadalobaidi.com)

[@alobaidizt](https://twitter.com/alobaidizt)

module.exports = {
  packages: {
    'devextreme-angular':  {
      ignorableDeepImportMatchers: [
        /devextreme\//
      ]
    },
    '@ckeditor/ckeditor5-angular': {
      ignorableDeepImportMatchers: [
        /@ckeditor\//
      ]
    },
  }
};

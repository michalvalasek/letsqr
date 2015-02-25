Template.generator.events({

  'keyup #input-url': function(event, template){
    var input = event.target.value;
    var enable_submit = input.length && validUrl(input);
    template.$('#button-submit').prop('disabled', !enable_submit);
  },

  'click #button-submit': function(event, template) {
    var url = template.find('#input-url').value.toString();
    if (url.length && validUrl(url)) {
      template.$('#qrcode').empty().qrcode({
        text: url,
        width: 320,
        height: 320
      });
      template.$('#qr-code-area').removeClass('collapse');

      var dataUrl = template.$('#qrcode canvas')[0].toDataURL();
      template.$('.download-link').attr('href',dataUrl);

      var timestamp = (new Date()).getTime();
      Inputs.insert({
        'type': 'url',
        'value': url,
        'createdAt': new Date(timestamp)
      });
    }
    else {
      template.$('#qr-code-area').addClass('collapse');
    }
  }
});

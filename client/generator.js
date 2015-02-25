Template.generator.events({

  'keyup #input-url': function(event, template){
    var input = event.target.value;

    // prepend the "http://" if missing
    if (input.indexOf('http')!=0) {
      input = 'http://' + input;
      event.target.value = input;
    }

    var enable_submit = input.length && validUrl(input);
    template.$('#button-submit').prop('disabled', !enable_submit);
    template.$('.generator-form p.text-danger').toggleClass('hidden',(input.length<1 || validUrl(input)));

    if (enable_submit===true && event.keyCode==13) {
      template.$('#button-submit').click();
    }
  },

  'click #button-submit': function(event, template) {
    var url = template.find('#input-url').value.toString();

    if (url.length && validUrl(url)) {
      template.$('#qrcode').empty().qrcode({
        text: url
      });
      template.$('#qr-code-area').hide().slideDown();

      var dataUrl = template.$('#qrcode canvas')[0].toDataURL();
      template.$('.download-link').attr('href',dataUrl);

      if (Session.get('last-input') != url) { // we don't want to save the same thing over and over again
        var timestamp = (new Date()).getTime();
        Inputs.insert({
          'type': 'url',
          'value': url,
          'createdAt': new Date(timestamp)
        });
        Session.set('last-input',url);
      }
    }
    else {
      template.$('#qr-code-area').addClass('collapse');
    }
  },

  'click .mail-link': function(event, template) {
    event.preventDefault();
  }
});

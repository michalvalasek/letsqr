Template.generator.events({

  'keyup #input-url': function(event, template){
    var input = event.target.value;

    var enable_submit = input.length && validUrl(input);
    template.$('#button-submit').prop('disabled', !enable_submit);
    template.$('.generator-form p.text-danger').toggleClass('hidden',(input.length<1 || validUrl(input)));

    if (enable_submit===true && event.keyCode==13) {
      template.$('#button-submit').click();
    }
  },

  'click #button-submit': function(event, template) {
    var url = template.find('#input-url').value.toString();

    // prepend the "http://" if missing
    if (url.indexOf('http')!=0) {
      url = 'http://' + url;
      template.find('#input-url').value = url;
    }

    if (url.length && validUrl(url)) {
      template.$('#qrcode').empty().qrcode({
        text: url,
        color: "#000000",
        bgColor: "#ffffff"
      });
      template.$('#qr-code-area').hide().slideDown();

      var dataUrl = template.$('#qrcode canvas')[0].toDataURL();
      template.$('.download-link').attr('href',dataUrl);

      var domain = url.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/)[1].replace('.','_');
      template.$('.download-link').attr('download','letsqr_'+domain+'.png');

      if (Session.get('last-input') != url) { // we don't want to save the same thing over and over again
        Meteor.call('addInput', 'url', url);
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

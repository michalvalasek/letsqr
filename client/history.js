Template.history.helpers({
  inputs: function(){
    return Inputs.find({},{limit:10, sort: {createdAt: -1}});
  },
  simplifyUrl: function(url) {
    return url.split('://')[1];
  },
  formatDate: function(date) {
    return moment(date).format('DD/MM/YYYY');
  }
});

Template.history.events({
  'click .show-code': function(event, template) {
    $('#input-url').val(this.value);
    $('#button-submit').prop('disabled',false).click();
  }
});

Template.history.rendered = function() {
  $('#input-history .panel-collapse').first().addClass('in');
};

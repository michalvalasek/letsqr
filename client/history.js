Template.history.helpers({
  latestInputs: function(){
    return Inputs.find({}, {sort: {createdAt: -1}}).fetch();
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

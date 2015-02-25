Template.navigation.events({
  'click #navbar a': function(event, template){
    template.$('li.active').removeClass('active');
    $(event.target).closest('li').addClass('active');
  }
});

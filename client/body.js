Template.body.events({

  // ripple effect on buttons
  'click .ripple-effect': function(event, template) {
    var rippler = $(event.target);

    // create .ink element if it doesn't exist
    if(rippler.find(".ink").length == 0) {
        rippler.append("<span class='ink'></span>");
    }

    var ink = rippler.find(".ink");

    // prevent quick double clicks
    ink.removeClass("animate");

    // set .ink diametr
    if(!ink.height() && !ink.width())
    {
        var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
        ink.css({height: d, width: d});
    }

    // get click coordinates
    var x = event.pageX - rippler.offset().left - ink.width()/2;
    var y = event.pageY - rippler.offset().top - ink.height()/2;

    // set .ink position and add class .animate
    ink.css({
      top: y+'px',
      left:x+'px'
    }).addClass("animate");
  }
});

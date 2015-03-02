Meteor.publish("latestInputs", function () {
  return Inputs.find({},{limit:10, sort: {createdAt: -1}});
});

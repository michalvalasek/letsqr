Meteor.methods({
  addInput: function(type, content) {
    check(type, Match.OneOf('url','text','location'));
    check(content, String);

    Inputs.insert({
      'type': type,
      'value': content,
      'createdAt': new Date()
    });
  }
});

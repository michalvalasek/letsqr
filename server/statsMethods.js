Meteor.methods({
  trackSentMail: function(from,to,qrcodeContent) {
    check(from, String);
    check(to, String);
    check(qrcodeContent, String);

    Stats.insert({
      type: 'sent_mail',
      data: {
        from: from,
        to: to,
        content: qrcodeContent
      },
      createdAt: new Date()
    });
  }
});

Meteor.methods({
  sendEmail: function (to, from, subject, content) {
    check([to, from, subject, content], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      html: content
    });
  }
});

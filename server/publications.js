Meteor.publish('posts', function(options) {
  //return Posts.find();
  check(options, {
    sort: Object,
    limit: Number
  });
  return Posts.find({}, options);  
  
});

Meteor.publish('singlePost', function(id) {
  check(id, String)
  return Posts.find(id);
});


Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
//  return Comments.find();
});

Meteor.publish('notifications', function() {
 // return Notifications.find();
   return Notifications.find({userId: this.userId, read: false});
});

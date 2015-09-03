var postsData = [
  {
    title: 'v1Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  }, 
  {
    title: 'v1Meteor',
    url: 'http://meteor.com'
  }, 
  {
    title: 'v1The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: function() {
  return Posts.find({}, {sort: {submitted: -1}});

}
});
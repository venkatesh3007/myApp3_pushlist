import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyApp3ENV.locationType
});

Router.map(function() {
  this.route('taxonomies', { path: '/' });
});

export default Router;

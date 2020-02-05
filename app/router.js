import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('rezepte', function() {
    this.route('neu');
  });
  this.route('rezept', {path: 'rezepte/:rezept_myid'}, function() {
    this.route('editieren');
  });
});

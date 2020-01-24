import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('kochbuch', function() {
    this.route('neu');
    this.route('editieren');
  });
  this.route('rezepttitel');
  this.route('rezept');
});

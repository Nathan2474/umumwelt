import { hash } from 'rsvp';
import Route from '@ember/routing/route';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';
import PerformanceRouteMixin from 'emberfire/mixins/performance-route';

export default Route.extend(RealtimeRouteMixin, PerformanceRouteMixin, {
    model(params) {
      let rezepte = this.store.query('rezept', { orderBy: 'name' });
      let theid = params.rezept_myid;
      //console.log(theid);
      let myrecipe = this.store.query('rezept', {orderBy: 'myid', equalTo: theid})
      .then(function(c) {
          return c.findBy("myid", theid)
        }
      );
      //console.log(myrecipe)
      return hash({
          rezepte: rezepte,
          rezept: myrecipe
      });
    }
});

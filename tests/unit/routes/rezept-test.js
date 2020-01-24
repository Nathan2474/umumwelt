import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rezept', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:rezept');
    assert.ok(route);
  });
});

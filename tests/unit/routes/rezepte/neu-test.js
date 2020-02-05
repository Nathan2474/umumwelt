import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | rezepte/neu', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:rezepte/neu');
    assert.ok(route);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | kochbuch/neu', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:kochbuch/neu');
    assert.ok(route);
  });
});

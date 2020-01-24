import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | kochbuch/editieren', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:kochbuch/editieren');
    assert.ok(route);
  });
});

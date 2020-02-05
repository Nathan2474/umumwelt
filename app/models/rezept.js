import Model, {attr} from '@ember-data/model';

export default class RezeptModel extends Model {
  @attr('string') myid;
  @attr('string') name;
  @attr('string') bild;
  @attr('string') beschreibung;
}

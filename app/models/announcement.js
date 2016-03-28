import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  message: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  date: DS.attr(),
  image: DS.attr()
});

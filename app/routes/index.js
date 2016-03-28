import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },
  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    save(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});

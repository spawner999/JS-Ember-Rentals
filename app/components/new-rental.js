import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },
    save() {
      var params = {
        owner: this.get('owner')? this.get('owner'): 'unknown',
        city: this.get('city')? this.get('city'): 'unknown',
        type: this.get('type')? this.get('type'): 'unknown',
        image: "http://lorempixel.com/400/200/city/",
        bedrooms: this.get('bedrooms')? this.get('bedrooms'): 'unknown',
      };
      this.set('addNewRental', false);
      this.sendAction('save', params);
    }
  }
});

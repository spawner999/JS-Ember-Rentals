import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow(){
      this.set('addNewAnnouncement', true);
      console.log(this.addNewAnnouncement);
    },
    save() {
      var params = {
        user: this.get('user')? this.get('user'): 'unknown',
        city: this.get('city')? this.get('city'): 'unknown',
        type: this.get('type')? this.get('type'): 'unknown',
        image: "http://lorempixel.com/400/200/city/",
        date: moment().format('MMM Do YY'),
        message: this.get('message')? this.get('message'): 'unknown',
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save', params);
    }
  }
});

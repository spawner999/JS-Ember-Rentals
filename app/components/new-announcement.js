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
        user: this.get('user'),
        city: this.get('city'),
        type: this.get('type'),
        image: "http://lorempixel.com/400/200/city/",
        date: moment().format('MMM Do YY'),
        message: this.get('message'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save', params);
    }
  }
});

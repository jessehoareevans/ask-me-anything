import Ember from 'ember';

export default Ember.Component.extend({
  isNotesShowing: false,
  actions: {
    notesShow: function() {
      this.set('isNotesShowing', true);
    },
    notesHide: function() {
      this.set('isNotesShowing', false);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});

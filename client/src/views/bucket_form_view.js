const PubSub = require('../helpers/pub_sub.js');

const BucketFormView = function (form) {
  this.form = form;
};

BucketFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBucketListItem = this.createBucketList(evt.target);
  PubSub.publish('BucketView:bucket-submitted', newBucketListItem);
  evt.target.reset();
};

BucketFormView.prototype.createBucketList = function (form) {
  const newBucketListItem = {
    goal: form.goal.value
  };
  return newBucketListItem;
};

module.exports = BucketFormView;

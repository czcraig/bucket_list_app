const PubSub = require('../helpers/pub_sub.js');

const BucketView = function (container) {
  this.container = container;
};

BucketView.prototype.render = function (bucket) {
  const bucketContainer = document.createElement('div');
  bucketContainer.id = 'bucket';

  const goal = this.createHeading(bucket.goal);
  bucketContainer.appendChild(goal);

  const deleteButton = this.createDeleteButton(bucket._id);
  this.container.appendChild(bucketContainer);

};

BucketView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

BucketView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
}

BucketView.prototype.createDeleteButton = function (bucketId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = bucketId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketView:bucket-delete-clicked', evt.target.value);
  });
  return button;
};


module.exports = BucketView;

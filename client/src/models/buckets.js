const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Buckets = function(url){
  this.url = 'http://localhost:3000/api/buckets';
  this.request = new Request(this.url);
};

Buckets.prototype.bindEvents = function () {
  PubSub.subscribe('BucketView:bucket-delete-clicked', (evt) => {
    this.deleteBucket(evt.detail);
  });

  PubSub.subscribe('BucketView:bucket-submitted', (evt) => {
    this.postBucket(evt.detail);
  })
};

Buckets.prototype.getData = function () {
  this.request.get()
    .then((bucketLists) => {
      PubSub.publish('Buckets:data-loaded', bucketLists);
    })
    .catch(console.error);
};

Buckets.prototype.postBucket = function (bucketList) {
  this.request.post(bucketList)
    .then((bucketLists) => {
      PubSub.publish('Buckets:data-loaded', bucketLists);
    })
    .catch(console.error);
};

Buckets.prototype.deleteBucket = function (bucketId) {
  this.request.delete(bucketId)
    .then((bucketLists) => {
      PubSub.publish('Buckets:data-loaded', bucketLists);
    })
    .catch(console.error);
};

module.exports = Buckets;

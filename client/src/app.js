const Buckets = require('./models/buckets.js');
const BucketFormView = require('./views/bucket_form_view.js');
const BucketGridView = require('./views/bucket_grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketsForm = document.querySelector('form#bucket-form');
  const bucketsFormView = new BucketFormView(bucketsForm);
  bucketsFormView.bindEvents();

  const bucketsContainer = document.querySelector('div#bucket-list');
  const bucketGridView = new BucketGridView(bucketsContainer);
  bucketGridView.bindEvents();

  const buckets = new Buckets();
  buckets.bindEvents();
  buckets.getData();
});

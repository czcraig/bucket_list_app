const Buckets = require('./models/buckets.js');

document.addEventListener('DOMContentLoaded', () => {


  const buckets = new Buckets();
  buckets.bindEvents();
  buckets.getData();
})

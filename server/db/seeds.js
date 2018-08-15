use buckets;
db.dropDatabase();

db.bucket_lists.insertMany([
{
  listItem: "swim with dolphins"
},
{
  listItem: "Sky Diving"
},

{
  listItem: "Visit China"
}

]);

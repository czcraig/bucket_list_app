use buckets;
db.dropDatabase();

db.bucket_lists.insertMany([
{
  goal: "swim with dolphins"
},
{
  goal: "Sky Diving"
},

{
  goal: "Visit China"
}

]);

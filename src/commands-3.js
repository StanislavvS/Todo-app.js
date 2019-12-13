db.friends.aggregate([
{
$bucket: { 
  groupBy: "$dob.age",
   boundaries: [0,18,30,50,120],
 output: {
   numPersons: {$sum: 1},
   averageAge: {$avg: "$dob.age"}
 
 }
}
}
  ]).pretty();

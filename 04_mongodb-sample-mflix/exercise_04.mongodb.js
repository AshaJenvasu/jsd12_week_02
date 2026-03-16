use("sample_mflix"); // บอกให้รู้ว่าจะใช้บ้านหลังนี้นะ


//How many movies mentioned American in their plot?
db.movies.find({
  plot: {
    $regex: 'American',
    $options: 'i'
  }
}).count()
// $regex find a word $options:i insensitive find any upper and lowercase chara

//How many movies does end plot (sentence) with the word street.
db.movies.find({
  plot: {
    $regex: 'street.$',
    $options: 'i'
  }
}).count()
//.$ mean at the end of sentence

//What does the data of above examples look like?
db.movies.find({
  plot: {
    $regex: 'street.$',
    $options: 'i'
  }
})

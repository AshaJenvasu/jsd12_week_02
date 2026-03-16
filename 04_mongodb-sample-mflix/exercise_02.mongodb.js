use("sample_mflix"); // บอกให้รู้ว่าจะใช้บ้านหลังนี้นะ

//What is an example of  type “movie” and rated “TV-G” look like?
db.movies.findOne({
  type: 'movie', 
  rated: 'TV-G'
})

//How many movies are there in “movie” type and “TV-G” rated?
db.movies.find({
  type: 'movie', 
  rated: 'TV-G'
}).count()
//ทำไม findOne().count() ถึงไม่ได้?คำสั่ง findOne() มันส่งกลับมาเป็น Document (หรือ "ของชิ้นเดียว")


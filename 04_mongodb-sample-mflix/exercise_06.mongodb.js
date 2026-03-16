use("sample_mflix"); // บอกให้รู้ว่าจะใช้บ้านหลังนี้นะ

//Find all movies in the "movies" collection released between 1950 and 1970 (inclusive) that are documented as being shown in countries located in the USA.
db.movies.find({
  countries: {$in: ["USA"]},
  year: {$gte: 1950, $lte: 1970}
})
//$in ย่อมาจากคำว่า "Included" หรือแปลเป็นไทยง่ายๆ ว่า "อยู่ใน..."

//What is the number of movies in the "movies" collection with genres "Drama" and "History" released after the year 1970?
db.movies.find(
  { 
  genres: { $all: ['Drama', 'History'] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}
).count()

//In how many films is Roy L. McCardell credited as an actor?
db.movies.find(
  { 
    cast: 'Roy L. McCardell'
   }
  ).count()

//How many movies did Hal Roach directed?
db.movies.find(
  { 
    directors: 'Hal Roach'
   }
  ).count()

//What is the movie with the earliest release year directed by Hal Roach?
db.movies.find({ 
  directors: 'Hal Roach'
})
.sort({
  released: 1
})
.limit(1)

//How many awards did Hal Roach’s movies win?
db.movies.find({ 
  directors: { $in: ['Hal Roach'] } 
  }, {
    title: 1, 
    'awards.wins': 1, 
    _id: 0 
  })
//$in คือการเช็กว่ามีค่านี้ "อยู่ในรายการ" หรือเปล่า 
//title ถึงเป็น 1? เลข 1 = เปิด (Show): คือการบอกว่า "ช่วยเอาชื่อเรื่อง (title) มาแสดงให้ดูด้วยนะ"
//ทำไม _id ถึงเป็น 0?เลข 0 = ปิด (Hide): ปกติแล้ว MongoDB จะแถมฟิลด์ _id มาให้เราดูเสมอโดยที่เราไม่ได้ขอ ถ้าเราไม่อยากเห็นรหัส ObjectId ยาวๆ รกหน้าจอ เราต้องสั่งปิดมันด้วยเลข 0
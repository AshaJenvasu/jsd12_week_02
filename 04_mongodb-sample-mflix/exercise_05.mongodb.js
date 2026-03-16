use("sample_mflix"); // บอกให้รู้ว่าจะใช้บ้านหลังนี้นะ

//What are top 5 runtime movies?
db.movies.find({})
.sort({
  runtime: -1
})
.limit(5)
//.sort() : เครื่องจัดแถว (The Arranger) sort() มีหน้าที่ "เรียงลำดับข้อมูล" ตามฟิลด์ที่เรากำหนด

//.limit() : เครื่องตัดจบ (The Stopper) limit() มีหน้าที่ "จำกัดจำนวนผลลัพธ์" ที่จะแสดง

//What are top 5 runtime movies that less than 60 minutes?
db.movies.find({
  runtime: ({
    $lt: 60
  })
})
.sort({
  runtime: -1
})
.limit(5)

//I was born in 1955, which 3 movies should I watch in next 10 years?
db.movies.find({
  year: ({
    $gt: 1954,
    $lt: 1966
  })
})
.sort({
  year: 1
})
.limit(3)
//.sort({ year: 1 })ใน MongoDB ตัวเลข 1 หมายถึง Ascending Order หรือการเรียงลำดับจาก "น้อยไปมาก"เมื่อนำมาใช้กับปี (Year) ผลลัพธ์ที่จะได้ก็คือ:เรียงจากหนังที่ "เก่าที่สุด" (ปีน้อยที่สุด) ไปหาหนังที่ "ใหม่ที่สุด" (ปีมากที่สุด) 

//How many movies were released during 1990 - 2000?
db.movies.find({
  release: ({
    $gte: ISO('1990-01-01T00:00:00Z'),
    $lt: ISO('2001-01-01T00:00:00Z')
  })
}).count()
//ISODate(): MongoDB จะเปลี่ยนมันเป็นข้อมูลประเภท Date T: ย่อมาจาก Time เป็นตัวคั่นว่า "ต่อไปนี้จะเป็นเวลาแล้วนะ" Z: ย่อมาจาก Zero Meridian (UTC) เป็นการบอกว่า "นี่คือเวลามาตรฐานโลก"
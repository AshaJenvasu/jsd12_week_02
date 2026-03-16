use("sample_mflix"); // บอกให้รู้ว่าจะใช้บ้านหลังนี้นะ

//How many theaters does AL state has?
db.theaters.find({
  'location.address.state': 'AL'
})
//Dot Notation คืออะไร?มันคือวิธีการระบุพิกัดเพื่อเจาะเข้าไปหาข้อมูลที่ "ฝังตัวอยู่ข้างใน" (Embedded Documents) 

//How many theaters does La Quinta city has?
db.theaters.find({
  'location.address.city': 'La Quinta'
}).count()
// city and state is different

//What is an example of each documents of above like?
db.theaters.findOne({
  'location.address.city': 'La Quinta'
})
//use find one because they need only an example

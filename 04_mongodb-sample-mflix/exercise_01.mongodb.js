use("sample_mflix"); // บอกให้รู้ว่าจะใช้บ้านหลังนี้นะ

//Fetch all documents from comments collection.
db.comments.find({}) // แล้วค่อยสั่งดึงข้อมูล

//Fetch only one user from comments collection by _id = ObjectId(“5a9427648b0beebeb69579f5”).
db.comments.find({_id: ObjectId('5a9427648b0beebeb69579f5')});

//Fetch only one user from comments collection by email = “john_bishop@fakegmail.com”.
db.comments.findOne({email: 'john_bishop@fakegmail.com'}); 
// .find() : ช่างเลือก (The Multi-Fetcher) สิ่งที่ทำ: วิ่งไปหา "ทุกอัน" ที่ตรงกับเงื่อนไข 
// findOne() : ช่างเจาะจง (The Single-Fetcher)สิ่งที่ทำ: วิ่งไปหาอันที่ตรงเงื่อนไขอันแรกที่มันเจอ แล้ว "หยุดทันที"

//Fetch only one user from comments collection by name = “John Bishop”.
db.comments.findOne({name: 'John Bishop'});

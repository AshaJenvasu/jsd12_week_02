# 🍃 MongoDB — Notes

## SQL vs NoSQL

| | SQL (PostgreSQL) | NoSQL (MongoDB) |
|---|---|---|
| โครงสร้าง | Fixed Schema | Flexible |
| เก็บข้อมูล | Tables & Rows | Documents (BSON/JSON) |
| แก้โครงสร้าง | ยาก | ง่าย |

> SQL เหมือนหอพักที่ต้องล็อกสเปกห้องมาเป๊ะๆ แก้โครงสร้างยาก
> NoSQL เหมือนบ้านส่วนตัว อยากต่อเติมตอนไหนก็ได้

---

## Hierarchy

```
Database        → Shop_DB
  Collection    → products  (เหมือน Table ใน SQL)
    Document    → { ...ข้อมูล 1 รายการ }  (เหมือน Row ใน SQL)
      Field     → name, price  (เหมือน Column ใน SQL)
```

---

## Aggregation Pipeline

ให้นึกภาพ **"สายพานในโรงงาน"** — ข้อมูลไหลเข้าต้นทาง ผ่านด่านต่างๆ (Stages) จนออกมาเป็นข้อมูลที่สรุปเสร็จแล้ว

| Stage | เทียบกับ SQL | หน้าที่ |
|---|---|---|
| `$match` | WHERE | กรองเฉพาะ document ที่ตรงเงื่อนไข |
| `$group` | GROUP BY | มัดรวมกลุ่มเดียวกัน + คำนวณ ($sum, $avg) |
| `$project` | SELECT | เลือก field ที่อยากแสดง (1 = แสดง, 0 = ซ่อน) |
| `$sort` | ORDER BY | เรียงจากมากไปน้อย (-1) หรือน้อยไปมาก (1) |
| `$limit` | LIMIT | เอาแค่ N รายการแรก |

---

## ตัวอย่าง Pipeline — Top 5 สินค้าขายดีในหมวดเครื่องเขียน

```js
db.products.aggregate([

  // 1. กรองเอาแค่หมวดเครื่องเขียน
  { $match: { category: "Stationery" } },

  // 2. มัดรวมตามชื่อสินค้า แล้วหาผลรวมที่ขายได้
  { $group: { _id: "$name", totalSales: { $sum: "$qty" } } },

  // 3. เรียงจากขายดีที่สุดไปน้อยสุด
  { $sort: { totalSales: -1 } },

  // 4. เอาแค่ 5 อันดับแรก
  { $limit: 5 },

  // 5. แสดงแค่ชื่อกับยอดขาย
  { $project: { name: 1, totalSales: 1 } }

])
```

---

## Tips

**`_id`** — ทุก Document จะมี `_id` อัตโนมัติ ห้ามซ้ำ เหมือน Primary Key ใน SQL

---

**Embed vs Reference** — เลือกยังไง?

**Embed** — ใส่รวมกันใน Document เดียวเลย
ใช้เมื่อข้อมูลนั้นอยู่ด้วยกันเสมอ

```js
// ตัวอย่าง: ที่อยู่อยู่ใน user เสมอ → Embed เลย
{
  _id: 1,
  name: "Fern",
  address: {
    city: "นนทบุรี",
    zip: "11000"
  }
}
```

**Reference** — แยก Collection แล้วเก็บแค่ ID อ้างอิง
ใช้เมื่อข้อมูลใหญ่เกินไป หรือถูกใช้ซ้ำหลายที่ (เหมือน JOIN ใน SQL)

```js
// ตัวอย่าง: order อ้างอิงถึง user ด้วย userId
{
  orderId: "ORD-001",
  userId: 1,        // ← reference ไปหา users collection
  totalPrice: 239
}
```

---
# 🗄️ Database & PostgreSQL — Notes

## Why Database?
Frontend → Backend → **Database**
ไม่มี Database = เก็บข้อมูลไม่ได้

---

## PostgreSQL คืออะไร?
- Relational Database
- เก็บข้อมูลแบบ **Tables → Rows → Columns**
- เหมือน Excel แต่ฉลาดและใหญ่กว่ามาก

---

## โครงสร้างหลัก

| ชื่อ | คืออะไร | ตัวอย่าง |
|---|---|---|
| **Table** | ตารางเก็บข้อมูล | users, orders |
| **Column** | ประเภทข้อมูล | id, name, email |
| **Row** | ข้อมูล 1 รายการ | 1 \| Fern \| fern@email.com |

---

## Data Types ที่ใช้บ่อย

| Type | ใช้เก็บ |
|---|---|
| `INTEGER` | ตัวเลข |
| `VARCHAR` | ข้อความ |
| `BOOLEAN` | true / false |
| `DATE` | วันที่ |
| `TIMESTAMP` | วัน + เวลา |

```sql
CREATE TABLE users (
  id        INTEGER,
  name      VARCHAR(100),
  email     VARCHAR(255)
);
```

---

## Keys

### Primary Key (PK)
- ตัวระบุข้อมูลแต่ละ row
- ห้ามซ้ำ, ห้าม NULL

### Foreign Key (FK)
- ตัวเชื่อมระหว่าง table
- `orders.user_id → users.id`

---

## Relationships

| แบบ | ตัวอย่าง | หมายเหตุ |
|---|---|---|
| One to One | User → Passport | |
| **One to Many** | User → Orders | ใช้บ่อยสุด |
| Many to Many | Student ↔ Courses | ต้องมี table กลาง |

---

## SQL Queries พื้นฐาน

```sql
-- ดึงข้อมูล
SELECT name FROM users;

-- กรองข้อมูล
SELECT * FROM users WHERE id = 1;

-- เรียงและจำกัดจำนวน
SELECT * FROM users ORDER BY name ASC LIMIT 10;
```

---

## JOIN — เชื่อม 2 Table

```sql
SELECT users.name, orders.product
FROM users
JOIN orders ON users.id = orders.user_id;
```

| JOIN | ความหมาย |
|---|---|
| `INNER JOIN` | เอาเฉพาะที่ match กันทั้งคู่ |
| `LEFT JOIN` | เอาทุก row ฝั่งซ้าย แม้ไม่ match |

---

## SQL Execution Order
ลำดับที่ Database ทำงานจริง

```
1. FROM
2. JOIN
3. WHERE
4. GROUP BY
5. HAVING
6. SELECT
7. ORDER BY
8. LIMIT
```

> ⚠️ เราเขียน SELECT ก่อน แต่ database รัน FROM ก่อนเสมอ

---
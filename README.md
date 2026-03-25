# 🏫 School Management API

## 🚀 Live API
https://school-management-api-8c9i.onrender.com

---

## 📌 Overview
This project is a backend API built using Node.js, Express, and MySQL to manage school data.

It allows:
- Adding new schools
- Fetching schools sorted by proximity to a user’s location

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MySQL
- Zod (validation)
- Render (deployment)
- Railway (database)

---

## 📡 API Endpoints

### ➕ Add School
**POST** `/api/addSchool`

#### Request Body:
```json
{
  "name": "ABC School",
  "address": "Hyderabad",
  "latitude": 17.385,
  "longitude": 78.4867
}
````

---

### 📍 List Schools

**GET** `/api/listSchools?latitude=17.385&longitude=78.4867`

#### Response:

```json
{
  "message": "Schools fetched successfully!",
  "count": 5,
  "schools": [
    {
      "id": 1,
      "name": "ABC School",
      "address": "Banjara Hills, Hyderabad",
      "latitude": 17.4126,
      "longitude": 78.4482,
      "distance": 5.11
    },
    {
      "id": 2,
      "name": "XYZ School",
      "address": "Madhapur, Hyderabad",
      "latitude": 17.4483,
      "longitude": 78.3915,
      "distance": 12.31
    },
    {
      "id": 3,
      "name": "Delhi Public School",
      "address": "Gachibowli, Hyderabad",
      "latitude": 17.4401,
      "longitude": 78.3489,
      "distance": 15.85
    },
    {
      "id": 5,
      "name": "Chirec International School",
      "address": "Kondapur, Hyderabad",
      "latitude": 17.47,
      "longitude": 78.357,
      "distance": 16.69
    },
    {
      "id": 4,
      "name": "Oakridge International School",
      "address": "Kondapur, Hyderabad",
      "latitude": 17.4699,
      "longitude": 78.3566,
      "distance": 16.72
    }
  ]
}
```

---

## 🧠 Features

* Input validation using Zod
* Distance calculation using Haversine formula
* Sorted results by nearest schools
* Clean MVC architecture
* Error handling

---

## 🗄️ Database Setup

Run the SQL file:

```
db/init.sql
```

This will:

* Create the `schools` table
* Insert sample data (Hyderabad-based)

---

## ⚙️ Local Setup

```bash
git clone <your-repo-link>
cd school-management-api
npm install
```

Create `.env`:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
PORT=5000
```

Run:

```bash
npm start
```

---

## 🌐 Deployment

* Backend hosted on Render
* Database hosted on Railway

---

## 👨‍💻 Author

Thrisha Burra






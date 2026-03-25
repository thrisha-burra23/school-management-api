import dotenv from "dotenv"
import mysql from "mysql2"

dotenv.config();

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,
    },
    connectTimeout: 10000,
});

const connectToDb = () => {

    db.connect((error) => {
        if (error) {
            console.log("DB connection failed!", error.message);
            process.exit(1);
        } else {
            console.log("DB connected successfully")
        }
    });
}

export { connectToDb, db }
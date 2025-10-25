import mysql from 'mysql2/promise'; // use the promise-based API

// Create a connection pool (recommended for production)
export const db = mysql.createPool({
  host: "80.211.73.226",
  port: 3306,
  user: "njcedf0cp4",
  password: "22AnkaMilo33@!",
  database: "jkt239jzrw",
  waitForConnections: true,
  connectionLimit: 10, // number of concurrent connections
  queueLimit: 0,
});

// Optional: check connection on startup
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("✅ Connected to Forpsi MySQL");
    connection.release(); // release back to pool
  } catch (error) {
    console.error("❌ Database connection failed:");
  }
})();
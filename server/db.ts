import mysql from 'mysql2'

export const db = mysql.createConnection({
  host: "80.211.73.226",
  port: 3306,
  user: "njcedf0cp4",
  password: "22AnkaMilo33@!",
  database: "jkt239jzrw"
});

// export const db = mysql.createConnection({
//   host: "localhost",
//   port: 8889,
//   user: "root",
//   password: "root",
//   database: "f120262"
// });

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to Forpsi MySQL");
  }
});
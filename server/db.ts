import mysql from 'mysql2'

export const db = mysql.createConnection({
  host: "db.r6.websupport.sk",
  port: 3314,
  user: "ahojreality",
  password: "2jUwV8fUSU9x@e-",
  database: "ahojreality"
});

// host: "localhost",
//   port: 8889,
//   user: "root",
//   password: "root",
//   database: "f120262"

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to Forpsi MySQL");
  }
});
// import database
const connection = require("../config/database");

// membuat class model Student
class Student {
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  // membuat method static untuk mengambil data students

  // membuat method static untuk mengambil data student berdasarkan id
  static find = (id, callback) => {
    connection.query(
      "SELECT * FROM students WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  };

  // membuat method static untuk menambahkan data student
  static create = (data, callback) => {
    connection.query("INSERT INTO students SET ?", [data], (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  };

  // membuat method static untuk mengupdate data student
  static update = (data, callback) => {
    connection.query(
      "UPDATE students SET ? WHERE id = ?",
      [data, data.id],
      (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  };

  // membuat method static untuk menghapus data student
  static delete = (id, callback) => {
    connection.query(
      "DELETE FROM students WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
      }
    );
  };
}

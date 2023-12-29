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

  // membuat method static untuk mengambil data student berdasarkan id
  static find(id)  {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students WHERE id = ?";
      connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  };

  // membuat method static untuk menambahkan data student
  static async create (data) {
    // melakukan insert data ke database
    await new Promise((resolve, reject) => {
      const query = "INSERT INTO students SET ?";
      connection.query(query,data, (error,results) => {
        if (err) {
          resolve(this.all(results.insertId));
        }
      });
    });
  }

  // membuat method static untuk mengupdate data student
  static async update (id, data) {
    await new Promise ((resolve, reject) => {
      const query = "UPDATE students SET ? WHERE id = ? ";
      connection.query(query, [data, new Date, id], (err, results) => {
        if (!err) {
          resolve(results)
        }
        reject(err);
      }) 
    })
  }


  // membuat method static untuk menghapus data student
  static destroy (id) {
    return new Promise ((resolve, reject) => {
      const query = "DETELE FROM students WHERE id = ?";
      connection.query(query,[id], (err, result) =>{
        if (!err) {
        resolve(result);
        }

        reject(err);
    });
  });
}
}
// export class Student
module.exports = Student;
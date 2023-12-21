// import studentsController
const studentsController = require("../controller/studentsController");

// import express
const express = require("express");

// buat object router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello express");
});

// membuat route untuk halaman students
router.get("/students", studentsController.index);
// menambahkan data mahasiswa baru ke database
router.post("/students/store", studentsController.store);
// menampilkan detail data mahasiswa
router.get("/students/:id", studentsController.show);
// edit data mahasiswa
router.put("/students/:id", studentsController.update);
// delete data mahasiswa
router.delete("/students/:id", studentsController.destroy);
module.exports = router;

// import Model Student
const Student = require("../models/Student"); 
class studentController {
  // menambahkan keyword async memberitahu proses asyncronous
  async index(req, res) {
    // memanggil method static all dengan async await
    const studets = await Student.all();

    const data = {
      message: "menampilkan data student",
      data: studets,
    };

    res.json(data);
  }

  async store(req, res) {
    // memanggil method create dari Model Student
    const students = await Student.create(req.body);

    const data = {
      message: `menambahkan data student`,
      data: students,
    };
    res.json(data);
  }

  async show(req, res) {
    const { id } = req.params;
    // cari student berdasarkan id
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `menampilkan detail student id ${id}`,
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `student tidak ditemukan`,
      };
      res.status(404).json(data);
    }
  }

  async update(req, res) {
    const id = req.params.id

    const student = await Student.find(id);

    if (student.length > 0) {
      // update data
      await Student.update (id, req.body);

      const data = {
        message: 'mengedit data student',
        data: this.updateStudent
      }

      res.status(200).json(data)
    } else {
      // kembalikan pesan kesalahan
      const data = {
        message: "Data tidak ada"
      }

      res.status(404).json(data)
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.fins(id);
    
    if (student > 0) {
      await Student.destroy(id);
      
      const data = {
      message: `menghapus data student`
    };
    
    return res.status(200).json(data);
  } else{
    const data = {
      message: `student tidak ditemukan`,
    };
    return res.status(404).json(data);
  }
}

}
// export objek controller
module.exports = new studentController();

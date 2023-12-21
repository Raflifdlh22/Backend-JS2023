class studentController {
  index(req, res) {
    const data = {
      message: "menampilkan data student",
      data: [],
    };
    res.send("menampilkan data student");
    res.json(data);
  }

  store(req, res) {
    const { nama } = req.body;

    const data = {
      message: `menambahkan data student baru ${nama}`,
      data: [],
    };
    res.json(data);
  }

  show(req, res) {
    const { id } = req.params;
    const data = {
      message: `menampilkan detail data student ${id}`,
      data: [],
    };
    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    const data = {
      message: `mengedit student id ${id}, nama ${nama}`,
      data: [],
    };
    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;
    const data = {
      message: `menghapus data student ${id}`,
      data: [],
    };
    res.json(data);
  }
}

// export objek controller
module.exports = new studentController();
// import method dalam contoller
const {
  index,
  store,
  destroy,
  update,
} = require("../controller/fruitController.js");

const main = () => {
  // menampilkan data
  console.log(`menampilkan data buah buahan: `);
  index();

  // menambahkan data
  console.log("\n");
  store("jeruk");

  // menghapus data
  console.log("\n");
  destroy(0);

  // mengubah data
  console.log("\n");
  update(2, "mangga");
};

main();

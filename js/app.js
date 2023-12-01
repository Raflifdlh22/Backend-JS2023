// import method dalam contoller
const { index, store } = require("../controller/fruitController.js");

const main = () => {
  // menampilkan data
  console.log(`menampilkan data buah buahan: `);
  index();

  // menambahkan data
  console.log("\n");
  store("jeruk");
};

main();

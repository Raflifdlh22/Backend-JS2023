// import data
const fruits = require("../data/data.js");

// menampilkan semua data
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// menambahkan data
const store = (newFruit) => {
  fruits.push(newFruit);

  console.log(`Menambahakan data ${newFruit}`);
  index();
};

// export method
module.exports = {
  index,
  store,
};

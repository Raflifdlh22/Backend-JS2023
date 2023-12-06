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

// menghapus data
const destroy = (fruit) => {
  fruits.splice(fruit, 1);

  console.log(`Menghapus data ${fruit}`);
  index();
};

// mengubah data
const update = (fruit, newFruit) => {
  fruits[fruit] = newFruit;
  console.log(`Mengubah data ${fruit} menjadi ${newFruit}`);
  index();
};

// export method
module.exports = {
  index,
  store,
  destroy,
  update,
};

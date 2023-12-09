const persiapan = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("menyiapkan bahan...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("merubus air...");
    }, 7000);
  });
};

const masak = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("memasak mie");
    }, 5000);
  });
};

// consume Promise
const main = () => {
  persiapan()
    .then((result) => {
      console.log(result);
      return rebusAir();
    })
    .then((result) => {
      console.log(result);
      return masak();
    })
    .then((result) => {
      console.log(result);
    });
};

const sencond = async () => {
  const hasilPersiapan = await persiapan();
  const hasilRebusAir = await rebusAir();
  const hasilMasak = await masak();

  console.log(hasilPersiapan);
  console.log(hasilRebusAir);
  console.log(hasilMasak);
};

sencond();

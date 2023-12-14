/**
 *Function to display download result
 *@param {string} result - download file name
 */

const showDownload = (result) => {
  console.log("download selesai");
  console.log(`hasil download : + ${result}`);
};

/**
 *Function to download a file
 *@retuns {Promise<string>} - A Promise that resolves with the downloaded file name
 */

const download = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("js.pdf");
    }, 3000);
  });
};

// using async/await
const executeDownload = async () => {
  try {
    const result = await download();
    showDownload(result);
  } catch (error) {
    console.error("Error during download:", error);
  }
};

//start download
executeDownload();

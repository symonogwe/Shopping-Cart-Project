import mockData from "../NavBar/NavUtils";

function productFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData());
    }, 5000);
  });
}

export default productFetch;

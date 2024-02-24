import mockData from "../NavBar/NavUtils";
function data() {
    return mockData()
}

function mockDataFetch() {
  let data;
  setTimeout(async () => {
    await data = mockData();
  }, 5000);

  return data;
}

export default mockDataFetch;

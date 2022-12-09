const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
  },
};

// const BASE_URL =
//   "https://amazon24.p.rapidapi.com/api/product?keyword=mobile&country=US&page=1";

export const fetchFromAPI = async (url) => {
  try {
    const response = await fetch(
      `https://amazon24.p.rapidapi.com/api/product?keyword=${url}&country=US&page=1`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProductDetails = async (id) => {
  try {
    const response = await fetch(
      `https://amazon24.p.rapidapi.com/api/product/${id}?country=US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

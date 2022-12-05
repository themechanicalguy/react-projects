import axios from "axios";

const SearchImage = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID JlqpCgv1x2Mu90nEZq_IGEbcUmmPjE2d7Z1pb-Za3j8",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);

  return response;
};

export default SearchImage;

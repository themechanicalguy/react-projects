import axios from "axios";

const SearchImage = async (term) => {
  console.log(term);
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID JlqpCgv1x2Mu90nEZq_IGEbcUmmPjE2d7Z1pb-Za3j8",
    },
    params: {
      query: term,
    },
  });

  console.log(response);

  return response.data.results;
};

export default SearchImage;

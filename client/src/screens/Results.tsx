import Loader from "components/Loader";
import PageHead from "components/PageHead";
import RecipesResults from "components/RecipesResults";
import { API_CLIENT as apiClient } from "lib/axios/apiClient";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Results = () => {
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    apiClient
      .get("/")
      .then(({ data }) => {
        console.log({ data });
      })
      .catch((err) => {
        if (err.response) {
          console.log("Request failed with status: " + err.response.status);
        }
      });
  }, []);

  return (
    <div>
      <PageHead />
      {loading ? (
        <Loader loadingText="Hang tight! We are looking for the best recipes with the ingredients you selected." />
      ) : (
        <RecipesResults
          selectedIngredients={searchParams.get("ingredients") || ""}
        />
      )}
    </div>
  );
};

export default Results;

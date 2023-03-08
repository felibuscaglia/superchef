import Loader from "components/Loader";
import PageHead from "components/PageHead";
import RecipesResults from "components/RecipesResults";
import { API_CLIENT as apiClient } from "lib/axios/apiClient";
import { IRecipeResult } from "lib/interfaces";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Results = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<IRecipeResult[]>([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    apiClient
      .get<IRecipeResult[]>("/recipes", {
        params: {
          ingredients: searchParams.get("ingredients"),
          minimizeMissingIngredients: searchParams.get(
            "minimizeMissingIngredients"
          ),
          ignorePantry: searchParams.get("ignorePantry"),
        },
      })
      .then(({ data }) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <PageHead />
      {loading ? (
        <Loader loadingText="Hang tight! We are looking for the best recipes with the ingredients you selected." />
      ) : (
        <RecipesResults results={results} />
      )}
    </div>
  );
};

export default Results;

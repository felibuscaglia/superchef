import { IRecipeResult } from "lib/interfaces";
import Result from "./Result";

interface IRecipesResults {
  results: IRecipeResult[];
}

const RecipesResults = ({ results }: IRecipesResults) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-60 text-center">
        <h2 className="font-title text-6xl">Your recipes.</h2>
        <p className="w-8/12 font-text mt-5 text-lg">
          These are the best recipes we selected that you can cook right now
          with the ingredients you selected.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-14">
        <Result title="Strudel de manzana" image="https://d320djwtwnl5uo.cloudfront.net/recetas/cover/strud_axYg39T1JkDQF4vh2Od5GRzweKHqVS.png" />
        {/* {results.map(({ id, title, image }) => (
          <Result key={`result-${id}`} title={title} image={image} />
        ))} */}
      </div>
    </div>
  );
};

export default RecipesResults;

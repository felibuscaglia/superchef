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
        <p className="w-8/12 font-text my-5 text-lg">
          These are the best recipes we selected that you can cook right now
          with the ingredients you selected.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-14">
        {results.map(
          ({
            id,
            title,
            image,
            missedIngredients,
            unusedIngredients,
            usedIngredients,
          }) => (
            <Result
              key={`result-${id}`}
              title={title}
              image={image}
              missedIngredients={missedIngredients}
              unusedIngredients={unusedIngredients}
              usedIngredients={usedIngredients}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RecipesResults;

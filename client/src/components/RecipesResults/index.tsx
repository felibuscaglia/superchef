interface IRecipesResults {
  selectedIngredients: string;
}

const RecipesResults = ({ selectedIngredients = "" }: IRecipesResults) => {
  return (
    <div className="flex flex-col items-center justify-center h-96 text-center">
      <h2 className="font-title text-6xl">Your recipes.</h2>
      <p className="w-8/12 font-text mt-5 mb-14 text-lg">
        These are the best recipes we selected that you can cook right now with
        the ingredients you selected.
      </p>
    </div>
  );
};

export default RecipesResults;

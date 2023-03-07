import SelectedIngredient from "./SelectedIngredient";

interface ISelectedIngredientsContainerProps {
  selectedIngredients: string[];
  onIngredientClick: (ingredients: string[]) => void;
}

const SelectedIngredientsContainer = ({
  selectedIngredients,
  onIngredientClick,
}: ISelectedIngredientsContainerProps) => {
  const handleClick = (indexOfIngredientToRemove: number) => {
    const NEW_INGREDIENTS = [...selectedIngredients];
    NEW_INGREDIENTS.splice(indexOfIngredientToRemove, 1);
    onIngredientClick(NEW_INGREDIENTS);
  };

  return (
    <div className="flex gap-3 w-full items-center justify-center">
      {selectedIngredients.map((ingredient, i) => (
        <SelectedIngredient
          ingredient={ingredient}
          onClick={() => handleClick(i)}
          key={`ingredient-${ingredient}-${i}`}
        />
      ))}
    </div>
  );
};

export default SelectedIngredientsContainer;

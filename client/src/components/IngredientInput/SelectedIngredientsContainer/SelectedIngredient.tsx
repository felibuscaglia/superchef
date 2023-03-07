import { XCircle } from "react-feather";

interface ISelectedIngredientProps {
  ingredient: string;
  onClick: () => void;
}

const SelectedIngredient = ({
  ingredient,
  onClick,
}: ISelectedIngredientProps) => {
  return (
    <button
      className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1 border border-gray-200 hover:bg-transparent"
      onClick={onClick}
    >
      <XCircle size="16px" />
      <span className="capitalize">{ingredient}</span>
    </button>
  );
};

export default SelectedIngredient;

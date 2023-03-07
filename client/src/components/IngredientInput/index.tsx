import { useState } from "react";
import { Search, Plus, Send } from "react-feather";
import SelectedIngredientsContainer from "./SelectedIngredientsContainer";
import { useNavigate } from "react-router-dom";
import { ENTER_KEY } from "lib/constants";

const ICON_SIZE = "24px";
const BUTTONS_CLASSNAMES =
  "bg-gray-200 h-full text-text-color px-4 hover:bg-yellow";

const IngredientInput = () => {
  const [input, setInput] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleAddBtnClick = () => {
    const MODIFIED_INPUT = input.trim().toLowerCase();

    if (MODIFIED_INPUT.length) {
      setSelectedIngredients([...selectedIngredients, input.toLowerCase()]);
      setInput("");
    }
  };

  const handleRedirect = () => {
    navigate(`/results?ingredients=${selectedIngredients.join(",")}`);
  };

  const handleKeyDown = (key: string) => {
    if (key === ENTER_KEY) {
      handleAddBtnClick();
    }
  };

  return (
    <div
      className="w-6/12 flex flex-col items-center justify-center gap-3"
      onKeyDown={({ key }) => handleKeyDown(key)}
    >
      <div className="flex items-center border rounded-3xl w-full">
        <Search size={ICON_SIZE} className="ml-2" />
        <input
          className="bg-transparent w-full font-text ml-2 p-2"
          placeholder="Tell us the ingredients you have..."
          onChange={({ target }) => setInput(target.value)}
          value={input}
        />
        <button
          className={BUTTONS_CLASSNAMES}
          onClick={() => handleAddBtnClick()}
        >
          <Plus size={ICON_SIZE} />
        </button>
        <button
          className={`${BUTTONS_CLASSNAMES} rounded-tr-3xl rounded-br-3xl`}
          onClick={() => handleRedirect()}
        >
          <Send size={ICON_SIZE} />
        </button>
      </div>
      <SelectedIngredientsContainer
        selectedIngredients={selectedIngredients}
        onIngredientClick={(ingredients) => setSelectedIngredients(ingredients)}
      />
    </div>
  );
};

export default IngredientInput;

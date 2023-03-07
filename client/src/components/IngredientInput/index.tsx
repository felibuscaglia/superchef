import { useState } from "react";
import { Search, Plus, Send } from "react-feather";
import SelectedIngredientsContainer from "./SelectedIngredientsContainer";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ENTER_KEY } from "lib/constants";
import Checkbox from "./Checkbox";

interface IIngredientInputOptions {
  minimizeMissingIngredients: boolean;
  ignorePantry: boolean;
}

const ICON_SIZE = "24px";
const BUTTONS_CLASSNAMES =
  "bg-gray-200 h-full text-text-color px-4 hover:bg-yellow";

const IngredientInput = () => {
  const [input, setInput] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [options, setOptions] = useState<IIngredientInputOptions>({
    minimizeMissingIngredients: false,
    ignorePantry: true,
  });

  const navigate = useNavigate();

  const handleAddBtnClick = () => {
    const MODIFIED_INPUT = input.trim().toLowerCase();

    if (MODIFIED_INPUT.length) {
      setSelectedIngredients([...selectedIngredients, input.toLowerCase()]);
      setInput("");
    }
  };

  const handleRedirect = () => {
    const PARAMS = {
      ingredients: selectedIngredients.join(','),
      minimizeMissingIngredients: String(options.minimizeMissingIngredients),
      ignorePantry: String(options.ignorePantry)
    }

    navigate({
      pathname: '/results',
      search: `?${createSearchParams(PARAMS)}`,
    });
  };

  const handleKeyDown = (key: string) => {
    if (key === ENTER_KEY) {
      handleAddBtnClick();
    }
  };

  const handleCheckboxChange = (checked: boolean, id: string) => {
    setOptions({
      ...options,
      [id]: checked,
    });
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
      <div className="w-full flex justify-between items-center px-4">
        <Checkbox
          id="minimizeMissingIngredients"
          label="Minimize missing ingredients"
          checked={options.minimizeMissingIngredients}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="ignorePantry"
          label="Ignore typical pantry items (such as water, salt, flour, etc.)"
          checked={options.ignorePantry}
          onChange={handleCheckboxChange}
        />
      </div>
      <SelectedIngredientsContainer
        selectedIngredients={selectedIngredients}
        onIngredientClick={(ingredients) => setSelectedIngredients(ingredients)}
      />
    </div>
  );
};

export default IngredientInput;

import { Link } from "react-router-dom";
import { CheckCircle, Circle } from "react-feather";
import { YELLOW_COLOR } from "lib/constants";
import Tooltip from "components/Tooltip";
import { IIngredient } from "lib/interfaces";
import { calculatePercentage } from "lib/helpers";

interface IResultProps {
  title: string;
  image: string;
  usedIngredients: IIngredient[];
  missedIngredients: IIngredient[];
  totalIngredientsCount: number;
  usedIngredientsCount: number;
}

const iconColor = (usedIngredintsPercentage: number) => {
  let color;
  if (usedIngredintsPercentage <= 25) {
    color = "red";
  } else if (usedIngredintsPercentage <= 50) {
    color = "yellow";
  } else if (usedIngredintsPercentage <= 75) {
    color = "green";
  } else {
    color = YELLOW_COLOR;
  }

  return color;
};

const ingredientsNames = (ingredients: IIngredient[]) =>
  ingredients.map(({ name }) => name);

const Result = ({
  title,
  image,
  missedIngredients = [],
  usedIngredients,
  totalIngredientsCount,
  usedIngredientsCount,
}: IResultProps) => {
  const USED_INGREDIENTS_PERCENTAGE = calculatePercentage(
    usedIngredientsCount,
    totalIngredientsCount
  );
  const ICON_COLOR = iconColor(USED_INGREDIENTS_PERCENTAGE);
  const USED_INGREDIENTS_NAMES = ingredientsNames(usedIngredients);
  const MISSED_INGREDIENTS_NAMES = ingredientsNames(missedIngredients);

  return (
    <Link
      to="/"
      className="flex flex-col items-center justify-center gap-2 hover:text-yellow"
    >
      <div
        className="h-56 bg-cover bg-center rounded w-3/4 p-4"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="flex items-center gap-2">
        <Tooltip
          tooltipText={`You have ${usedIngredientsCount} (${USED_INGREDIENTS_NAMES.join(
            ", "
          )}) of the ${totalIngredientsCount} ingredients needed for this recipe. You still need ${MISSED_INGREDIENTS_NAMES.join(
            ", "
          )}.`}
          component={USED_INGREDIENTS_PERCENTAGE === 100 ? CheckCircle : Circle}
          componentProps={{
            color: ICON_COLOR,
            fill: ICON_COLOR,
            size: "16px",
            className: "mt-1 cursor-help",
          }}
        />
        <h1 className="font-title font-bold text-lg">{title}</h1>
      </div>
    </Link>
  );
};

export default Result;

import { Link } from "react-router-dom";
import { CheckCircle, Circle } from "react-feather";
import { YELLOW_COLOR } from "lib/constants";
import Tooltip from "components/Tooltip";
import { IIngredient } from "lib/interfaces";
import { calculatePercentage } from "lib/helpers";

interface IResultProps {
  title: string;
  image: string;
  missedIngredients: IIngredient[];
  unusedIngredients: IIngredient[];
  usedIngredients: IIngredient[];
}

const iconColor = (usedIngredintsPercentage: number) => {
  if (usedIngredintsPercentage <= 25) {
    return "red";
  } else if (usedIngredintsPercentage <= 50) {
    return "yellow";
  } else if (usedIngredintsPercentage <= 75) {
    return "green";
  } else {
    return YELLOW_COLOR;
  }
};

const Result = ({
  title,
  image,
  missedIngredients = [],
  unusedIngredients = [],
  usedIngredients = [],
}: IResultProps) => {
  const TOTAL_INGREDIENTS =
    usedIngredients.length +
    missedIngredients.length -
    unusedIngredients.length;

  const USED_INGREDIENTS_PERCENTAGE = calculatePercentage(
    usedIngredients.length,
    TOTAL_INGREDIENTS
  );

  const ICON_COLOR = iconColor(USED_INGREDIENTS_PERCENTAGE);
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
          tooltipText={`You have ${USED_INGREDIENTS_PERCENTAGE.toFixed(
            2
          ).replace(/[.,]00$/, "")}% of the ingredients needed for this recipe`}
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

import { Link } from "react-router-dom";
import { CheckCircle } from 'react-feather';
import { YELLOW_COLOR } from "lib/constants";

interface IResultProps {
  title: string;
  image: string;
}

const Result = ({ title, image }: IResultProps) => {
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
        <CheckCircle color={YELLOW_COLOR} size="16px" className="mt-1" />
        <h1 className="font-title font-bold text-lg">{title}</h1>
      </div>
    </Link>
  );
};

export default Result;

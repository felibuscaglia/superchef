import { Link } from "react-router-dom";
import UserTab from "./UserTab";

const PageHead = () => {
  return (
    <header className="flex justify-between flex-row w-full py-4">
      <Link to="/">
        <h1 className="font-title font-bold text-4xl ml-14">
          SuperChef<span className="text-yellow">.</span>
        </h1>
      </Link>
      <div className="mr-14">
        <UserTab />
      </div>
    </header>
  );
};

export default PageHead;

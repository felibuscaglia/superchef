import IngredientInput from "components/IngredientInput";
import PageHead from "components/PageHead";

const MainScreen = () => {
  return (
    <main>
      <PageHead />
      <section className="flex flex-col items-center justify-center text-center h-96">
        <h1 className="font-title text-6xl">Cook with what you have.</h1>
        {/* Esto puede ser también un Welcome back, user con authentication */}
        <p className="w-8/12 font-text mt-5 mb-14 text-lg">
          Not sure what you to cook with what you have at hand? No worries, just
          tell us the ingredients you have and we'll show you the best recipes
          you can do. No need for you to get out of your house.{" "}
          <u>As simple as that</u>.
        </p>
        <IngredientInput />
      </section>
    </main>
  );
};

export default MainScreen;

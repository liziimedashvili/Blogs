/* eslint-disable react/prop-types */
import Category from "./Category";

export default function CategoryWrapper({
  onSelectCategory,
  categories,
  searchParams,
  chosenCategory,
}) {
  return (
    <div className="flex flex-wrap justify-start gap-[24px] my-[60px]">
      {categories.map((category) => (
        <div key={category.id}>
          <Category
            category={category}
            searchParams={searchParams}
            chosenCategory={chosenCategory}
            onChooseCategory={onSelectCategory}
          />
        </div>
      ))}
    </div>
  );
}


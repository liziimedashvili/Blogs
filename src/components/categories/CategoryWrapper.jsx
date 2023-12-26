/* eslint-disable react/prop-types */
import Category from "./Category";

export default function CategoryWrapper({
  onSelectCategory,
  categories,
  searchParams,
  selectedCategory,
}) {
  return (
    <div className="flex flex-wrap justify-start gap-[24px] my-[64px]">
      {categories.map((category) => (
        <div key={category.id}>
          <Category
            category={category}
            searchParams={searchParams}
            selectedCategory={selectedCategory}
            onChooseCategory={onSelectCategory}
          />
        </div>
      ))}
    </div>
  );
}

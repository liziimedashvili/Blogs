/* eslint-disable react/prop-types */
 const Category = ({ category, onClick }) => {
  return (
    <span
      onClick={() => onClick(category)}
      className="text-[15px] font-medium leading-4 flex items-center px-8 py-2 w-auto rounded-[30px] cursor-pointer"
      style={{
        backgroundColor: category.background_color,
        color: category.text_color,
      }}
    >
      {category.title}
    </span>
  );
};
export default Category;
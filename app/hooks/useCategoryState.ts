import { useState } from "react";

type CategoryState = {
  [key: string]: boolean;
};

function useCategoryState() {
  const [categoryState, setCategoryState] = useState<CategoryState>({});

  const toggleCategory = (clickedCategory: string) => {
    setCategoryState((prevCategoryState) => {
      const updatedCategoryState: CategoryState = {};

      if (prevCategoryState[clickedCategory]) {
        updatedCategoryState[clickedCategory] = false;
      } else {
        updatedCategoryState[clickedCategory] = true;

        for (const key in prevCategoryState) {
          if (key !== clickedCategory) {
            updatedCategoryState[key] = false;
          }
        }
      }

      return updatedCategoryState;
    });
  };

  return { categoryState, toggleCategory };
}

export default useCategoryState;

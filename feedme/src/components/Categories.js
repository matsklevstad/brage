import React, { useState } from "react";

export default function Categories({ categoriesList, setCategoryList }) {
  const recipeCategory = {
    dinner: "Dinner",
    vegan: "Vegan",
    glutenfree: "Gluten free",
    breakfast: "Breakfast",
    lunch: "Lunch",
  };

  const updateCategory = (checked, recipeCategory) => {
    if (checked) {
      setCategoryList([...categoriesList, recipeCategory]);
    } else {
      // unchecked
      const updatedList = categoriesList.filter((c) => c !== recipeCategory);
      setCategoryList(updatedList);
    }
  };

  return Object.values(recipeCategory).map((recipeCategory) => (
    <CategoryCheckbox
      label={recipeCategory}
      handleCheck={(value) => updateCategory(value, recipeCategory)}
    />
  ));
}

function CategoryCheckbox({ label, handleCheck }) {
  const [checked, setChecked] = useState(false);

  const onClick = () => {
    setChecked(!checked);
    handleCheck(!checked);
  };

  return (
    <label>
      <input type="checkbox" value={checked} onClick={onClick} key={label}/>
      {label}
      <br/>
    </label>
  );
}
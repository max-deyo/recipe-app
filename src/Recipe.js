import React from "react";

function Recipe({recipe, deleteRecipe}) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo}/></td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name='delete' onClick={deleteRecipe}>delete</button>
      </td>
    </tr>
  );
}

export default Recipe;
import React, { useState } from "react";

function RecipeCreate({onCreateRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation
    }
    onCreateRecipe(recipe);
    
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" value={name} onChange={event => setName(event.target.value)}/>
            </td>
            <td>
              <input type="text" name="cuisine" value={cuisine} onChange={event => setCuisine(event.target.value)}/>
            </td>
            <td>
              <input type="url" name="photo" value={photo} onChange={event => setPhoto(event.target.value)}/>
            </td>
            <td>
              <textarea type="text" name="ingredients" value={ingredients} onChange={event => setIngredients(event.target.value)}/>
            </td>
            <td>
              <textarea type="text" name="preparation" value={preparation} onChange={event => setPreparation(event.target.value)}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

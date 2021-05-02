function Ingredients({ingredientsList}) {
  return (
    <ul>
      {
        ingredientsList.map(ingredient => (
          <li>{ingredient}</li>
        ))
      }
    </ul>
  );
}

export default Ingredients;

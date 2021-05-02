import { useState } from "react";
import BigHeading from "./BigHeading";
import Button from "./Button";
import Ingredients from "./Ingredients";
import SubHeading from "./SubHeading";

function App() {
  const [showIngredients, setShowIngredients] = useState(false)
  const [showPicture, setShowPicture] = useState(false)
  const ingredients = ['Butter', 'Flour', 'Eggs', 'Sugar']

  return (
    <div className="App">
      <BigHeading>Cookie Recipe</BigHeading>
      <div>
        In this tutorial, I will teach you how I make my cookies!
      </div>
      <div>
        <Button onClick={() => setShowIngredients(true)}>Reveal Ingredients</Button>
      </div>
      {
        showIngredients ? (
          <>
            <SubHeading>Ingredients:</SubHeading>
            <div>
              <Ingredients ingredientsList={ingredients}></Ingredients>
            </div>
          </>
        ) : null
      }
      <div>
        <Button onClick={() => setShowPicture(true)}>Reveal Final Result</Button>
      </div>
      {
        showPicture ? (
          <>
            <div>
              Here's a picture of the resulting cookies:
            </div>
            <div>
              <img height="200px" src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"></img>
            </div>
          </>
        ) : null
      }
    </div>
  );
}

export default App;

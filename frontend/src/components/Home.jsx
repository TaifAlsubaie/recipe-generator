import { useState } from "react";

function Home() {
  const [ingredients, setIngredients] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();

    console.log("Ingredients:", ingredients);
  };

  return (
    <div className="recipe-hero">

      <div className="container">

        <h2>
          Turn your ingredients into
          <span> delicious recipes 🍳</span>
        </h2>

        <p className="mt-3">
          Tell us what you have in your kitchen and let AI do the rest.
        </p>

        <div className="card recipe-card mt-5">

          <div className="card-body">

            <form onSubmit={handleGenerate}>

              <label className="form-label recipe-label">
                🥕 What ingredients do you have?
              </label>

              <textarea
                className="form-control recipe-input"
                rows="5"
                placeholder="Example: chicken, rice, tomato, onion..."
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />

              <button
                type="submit"
                className="btn generate-btn w-100 mt-4"
                disabled={!ingredients.trim()}
              >
                ✨ Generate My Recipe
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;
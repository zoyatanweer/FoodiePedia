import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🥒": "Cucumber",
  "🥬": "Leafy Green",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": " Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🧆": "Falafel",
  "🍱": "Bento Box",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🥮": "Moon Cake",
  "🍡": " Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🦪": "Oyster",
  "🍦": "Soft Ice Cream",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🧁": "Cupcake",
  "🥧": "Pie",
  "🍫": "Chocolate Bar",
  "🍯": "Honey Pot",
  "☕": "Hot Beverage",
  "🍶": "Sake",
  "🍾": "Bottle with Popping Cork",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clinking Glasses",
  "🥃": "Tumbler Glass"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have that in our database";
    }
    setMeaning(meaning); //react call to show output
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react call to show output
  }

  return (
    <div className="App">
      <h1>FoodiePedia</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2> {/*actual output set by react using useState*/}
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <footer>Made with ❤️</footer>
    </div>
  );
}

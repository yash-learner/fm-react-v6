//  App is a react component => basic building block in react which uses functions and classes to create reusable components

// import React from "react"; //Babel automatically finds
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// "./name" => file in same directory
// "name" => node module from npm
// 98% percent of times it is to have a separate file for every component

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Lunaaa",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
// breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "German Shepard",
//     }),
//   ]);
// };

//jsx

const App = () => {
  return (
    <div>

      <h1>Adopt Me!</h1>
      <SearchParams />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="German Shepard" />
    </div>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root")); // old way

ReactDOM.render(<App />, document.getElementById("root"));

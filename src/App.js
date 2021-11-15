//  App is a react component => basic building block in react which uses functions and classes to create reusable components
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);

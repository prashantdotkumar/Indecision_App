console.log("app.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};
const removeAll = () => {
  app.options = [];
  renderIndecisionApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

//JSX - Javascript XML

const appRoot = document.getElementById("app");
const numbers = [55, 101, 200];
const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle} </p>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options "
          : "No Options"}
      </p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>

      <ol>
        {app.options.map((option) => {
          return <li key={option}>Option: {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();

// const user = {
//   age: 35,
//   location: "Greater Noida",
// };
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

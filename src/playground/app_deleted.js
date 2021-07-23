//class Header converted to Stateless functional component

//react enforces uppercase first letter for react components
// class Header extends React.Component {
//   render() {
//     //console.log(this.props);
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

//class Action converted to Stateless functional component

//react components has to call render()
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

//in the form element below this.handleAddOption.bind(this) has to be added so that the handleAddOption has the same binding as the render() has
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {this.props.options.map((_option) => (
//           <OptionComponent key={_option} optionText={_option}></OptionComponent>
//         ))}
//       </div>
//     );
//   }
// }

//class OptionComponent changed to Stateless Component

// class OptionComponent extends React.Component {
//   render() {
//     return <div>{this.props.optionText}</div>;
//   }
// }

//stateless function components - faster than class based components

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

//ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

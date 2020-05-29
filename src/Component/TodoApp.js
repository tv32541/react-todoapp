import React, { PureComponent } from "react";
import "./TodoApp/TodoApp.css";
import { dynamicHandlers } from "../Util/Utils";
import Button from "../Util/Button";


export default class TodoApp extends PureComponent {
  state = {
    input: "",
    items: [],
  };
  /*   handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }; */
  sendClick=(input)=>(event)=>{
    this.setState({ [event.target.name]: event.target.value });
  };

  storeItems = (event) => {
    event.preventDefault();

    const { input } = this.state;
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };

  /*   removeItems = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  }; */

  removeItems = (key) => () => {
   
   this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
  };

  render() {
    const { input, items } = this.state;

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <input
            type="text"
            value={input}
            name="input"
            onChange={(event) => dynamicHandlers(event, this)}
            placeholder="Enter Items..."
          ></input>
          <div className="todo-container-divAdd">
           <Button className="todo-container-btnAdd" id="btnAdd" name="btnAdd" onClick={this.sendClick(input)}><i className="fas fa-plus-circle"></i> </Button>
           </div>
          {/* onChange={this.handleChange} */}
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className="fas fa-trash-alt "
                onClick={this.removeItems(index)}
                // onClick={() => this.removeItems(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

import "./List.css";

class List extends Component {
  state = {
    id: 1,
    items: [{ id: 0, val: 1 }],
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat({
          id: prevState.id,
          val: prevState.items.length + 1,
        }),
        id: prevState.id + 1,
      };
    });
  };

  removeItemHandler = (id) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item) => (
      <CSSTransition key={item.id} classNames="fade" timeout={300}>
        <li
          className="ListItem"
          onClick={() => this.removeItemHandler(item.id)}
        >
          {item.val}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;

import React, { Component } from "react";


class ToDoItem extends Component {

  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li class='hoverbutton'
              key={item.key}>{item.text}

              <span><input type='button' value='X'  onClick={() => this.delete(item.key)}></input></span>

              </li>
  }

  render() {
    var todoItems = this.props.entries;
    var Items = todoItems.map(this.createTasks);

    return (
      <div>
      <ul className='theList'>




          {Items}

      </ul>
      </div>

    );
  }
};

export default ToDoItem;

import React, { Component } from 'react';
import ToDoItem from './ToDoItem';


class TodoFrom extends Component {


  constructor(props) {
    super(props);

    this.state = {
    items: []
  };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  addItem(e) {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputElement.value = "";
  }
  console.log(this.state.items);

 e.preventDefault();
}

deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}





  render() {
    return (
      <div className="todoListMain">

          <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a}
                placeholder="Enter To-Do Item" autofocus="true">
        </input>
            <button type="submit">Add Item</button>
            <div className="counter1">
         { this.state.items.length === 1 &&
           <button type="submit"><strong>{this.state.items.length}</strong> item</button>
         }
         { this.state.items.length > 1 &&
           <button type="submit"><strong>{this.state.items.length}</strong> items</button>
         }
         { this.state.items.length == 0 &&
           <button type="submit"><strong>{this.state.items.length}</strong> items</button>
         }


       </div>



          </form>

          <ToDoItem entries={this.state.items}
                    delete={this.deleteItem}/>

      </div>




    );
  }
}

export default TodoFrom;

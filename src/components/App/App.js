import React, { Component } from "react";
import { List } from "../List/List";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export default class App extends Component {

  state = {
    todos: [
      { id: 1, title: "delectus aut autem", done: true },
      { id: 2, title: "quis ut nam facilis et officia qui", done: false },
      { id: 3, title: "fugiat veniam minus", done: false },
      { id: 4, title: "et porro tempora", done: false },
      { id: 5, title: "laboriosam mollitia et enim quasi adipisci quia provident illum", done: false },
      { id: 6, title: "qui ullam ratione quibusdam voluptatem quia omnis", done: false },
      { id: 7, title: "illo expedita consequatur quia in", done: false },
      { id: 8, title: "quo adipisci enim quam ut ab", done: false },
      { id: 9, title: "molestiae perspiciatis ipsa", done: false },
      { id: 10, title: "illo est ratione doloremque quia maiores aut", done: false },
      { id: 11, title: "vero rerum temporibus dolor", done: false },
      { id: 12, title: "ipsa repellendus fugit nisi", done: false },
      { id: 13, title: "et doloremque nulla", done: false },
      { id: 14, title: "repellendus sunt dolores architecto voluptatum", done: false },
      { id: 15, title: "ab voluptatum amet voluptas", done: false },
      { id: 16, title: "accusamus eos facilis sint et aut voluptatem", done: false },
      { id: 17, title: "quo laboriosam deleniti aut qui", done: false },
      { id: 18, title: "dolorum est consequatur ea mollitia in culpa", done: false },
      { id: 19, title: "molestiae ipsa aut voluptatibus pariatur dolor nihil", done: false },
      { id: 20, title: "ullam nobis libero sapiente ad optio sint", done: false }
    ],
    todoText: ""
  };

  onChangeInput = e => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [...todos, { id: todos.length + 1, name: todoText, done: false }],
      todoText: ""
    }));
  };

  onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done } : el
      )
    }));
  };

  handleDel = item => {
    this.setState(({ todos }) => ({
      todos: todos.filter(el => el.id !== item.id)
    }));
  };

  render() {
    const { todos, todoText } = this.state;

    return (
      <>
        <h2>ToDo List:</h2>
        {/* <Input value={todoText} onChange={this.onChangeInput} />
        <Button onClick={this.onSubmitTodo}>Submit</Button> */}
        <List
          list={todos}
          onChangeBox={this.onChangeBox}
          handleDel={this.handleDel}
        />
      </>
    );
  }
}

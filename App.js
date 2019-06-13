import React from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import TodoInput from './src/TodoInput';
import TodoList from './src/TodosList';
import thanos from './Images/thanos.png';

export default class App extends React.Component {
  state = {
    todoText: "chenna kesava",
    todos: [],
    todoNames: [],
    edit: false,
    index: null,
    textToEdit: null
  };
  handleOnChange = todoText => this.setState({ todoText });

  handleAddTodo = () => {
    const { todoText, todoNames } = this.state;
    if (!todoText) {
      alert("Enter a todo")
    }
    else if (todoNames.indexOf(todoText) > -1) {
      alert("The todo already exists")
    }
    else {
      this.setState(prevState => ({
        ...prevState,
        todos: prevState.todos.concat({
          name: prevState.todoText,
          key: Math.random().toString(),
          image: thanos
        }),
        todoNames: prevState.todoNames.concat(prevState.todoText),
        todoText: ""
      }));
    }
  };

  handleDeleteTodo = (todoKey, todoName) => {
    this.setState(prevState => ({
      ...prevState,
      todos: prevState.todos.filter(todo => todo.key !== todoKey),
      todoNames: prevState.todoNames.filter(todo => todo !== todoName),
    }));
  };

  handleEditTodo = (todo, index) => {
    this.setState({ todoText: todo, index, edit: true, textToEdit: todo })
  }

  handleUpdate = () => {
    this.setState(prevState => {
      const { index, todoText, todos } = prevState;
      if (todos[index].name !== todoText) {
        todos[index].name = todoText;
        return { ...prevState, edit: false, todoText: '', index: null }
      } else {
        alert("Kindly update the todo or cancel it")
      }
    })
  };

  cancelUpdate = () => this.setState({ edit: false, todoText: '', index: null })

  render() {
    const { todoText, todos, edit } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1a73e8" barStyle="light-content" />
        <TodoInput
          handleOnChange={this.handleOnChange}
          todoText={todoText}
          handleAddTodo={this.handleAddTodo}
          edit={edit}
          handleUpdate={this.handleUpdate}
          cancelUpdate={this.cancelUpdate}
        />
        <FlatList
          style={{ width: '100%' }}
          data={todos}
          renderItem={(info) => (
            <TodoList
              image={info.item.image}
              todo={info.item.name}
              handleDeleteTodo={() => this.handleDeleteTodo(info.item.key, info.item.name)}
              handleEditTodo={() => this.handleEditTodo(info.item.name, info.index)}
            />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  }
});




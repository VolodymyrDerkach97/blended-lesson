import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  handelSubmit = text => {
    const newTodo = { id: nanoid(), text };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  handleTodoDelete = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handelSubmit} />
        <Grid>
          {todos.map(({ id, text }, index) => (
            <GridItem key={id}>
              <Todo
                text={text}
                index={index + 1}
                onDelete={() => this.handleTodoDelete(id)}
              />
            </GridItem>
          ))}
        </Grid>
      </>
    );
  }
}

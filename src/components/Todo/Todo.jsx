import { Text } from 'components';
import { Component } from 'react';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export class Todo extends Component {
  state = {
    text: this.props.text,
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onEdit(this.props.id, this.state.text);
  };

  render() {
    return (
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{this.props.index}
        </Text>
        <form onSubmit={this.handleSubmit}>
          <input
            size={15}
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>

        <DeleteButton type="button" onClick={this.props.onDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    );
  }
}

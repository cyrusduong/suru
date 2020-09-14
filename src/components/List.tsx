import React, { useState } from 'react'
import uid from 'uid';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import ListItem from './subcomponents/ListItem';

export interface TodoItem {
  id: string
  description: string
  isDone: boolean
  dueDate?: number
  completedDate?: number
  tags?: string[]
}

const newTodoItem = (description: string, dueDate?: number, tags?: string[]): TodoItem => {
  const id = uid();

  return {
    id, description, dueDate, tags, isDone: false
  }
}

interface ListProps {
  todoItems: TodoItem[],
  setTodoItems: Function,
  doneItems: TodoItem[],
  setDoneItems: Function
}

const List = ({ todoItems, setTodoItems, doneItems, setDoneItems }: ListProps) => {
  const [todoValue, setTodoValue] = useState<string>('');

  const handleAddTodoClicked = () => {
    // Prepend new todo to top of list.
    if (todoValue) {
      const newItem = newTodoItem(todoValue);

      setTodoItems([newItem, ...todoItems])

      //Reset value
      setTodoValue('');
    }
  }

  const handleAddNewTodo = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddTodoClicked();
    }
  }


  const handleDoneClicked = (id: string) => {
    const now = moment().valueOf();
    const item = todoItems.filter(item => item.id === id)[0];

    const doneItem = { ...item, isDone: true, completedDate: now };

    // Prepend done item to top of list
    setDoneItems([doneItem, ...doneItems]);
    setTodoItems(todoItems.filter(item => item.id !== id));
  }

  const handleRedoClicked = (id: string) => {
    const item = doneItems.filter(item => item.id === id)[0];
    const redoItem = { ...item, isDone: false, completedDate: undefined };

    // Prepend redo item to top of list
    setTodoItems([redoItem, ...todoItems]);
    setDoneItems(doneItems.filter(item => item.id !== id))
  }

  const handleNewDescription = (id: string, value: string, isDone: boolean) => {
    if (isDone) {
      const modifiedItem = doneItems.filter((item: TodoItem) => item.id === id)[0];
      modifiedItem.description = value;
      setDoneItems([...doneItems]);
    } else {
      const modifiedItem = todoItems.filter((item: TodoItem) => item.id === id)[0];
      modifiedItem.description = value;
      setTodoItems([...todoItems]);
    }
  }

  const numDoneVisible = doneItems.length < 10 ? doneItems.length : 10;

  return (
    <div className="main flex-container-center">
      <div className="todo-bar width-90">
        <InputGroup>
          <FormControl
            placeholder="What you want to do?"
            className="todo-input"
            onKeyPress={(e: React.KeyboardEvent) => handleAddNewTodo(e)}
            onChange={(event) => setTodoValue(event.target.value)}
            value={todoValue}
          />
          <InputGroup.Append>
            <Button
              disabled={!todoValue}
              className="todo-done-button"
              onClick={handleAddTodoClicked}
            >
              Add
          </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <ListGroup className="todo-list width-90">
        {todoItems.map((item: TodoItem) =>
          <ListItem item={item} handleActionClicked={handleDoneClicked} handleNewDescription={handleNewDescription}/>
        )}
      </ListGroup>
      {doneItems?.length > 0 ? <h1 className="done-label">Done</h1> : null}
      <ListGroup className="done-list width-90">
        {doneItems.slice(0, numDoneVisible).map((item: TodoItem) =>
          <ListItem item={item} handleActionClicked={handleRedoClicked} handleNewDescription={handleNewDescription}/>
        )}
      </ListGroup>
    </div>
  );
}

export default List;

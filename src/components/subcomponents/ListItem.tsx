import React from 'react';
import moment from 'moment';

import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { TodoItem } from '../List';

interface ListItemProps {
  item: TodoItem
  handleActionClicked: Function
}

const ListItem = ({ item, handleActionClicked }: ListItemProps) => {
  const {
    id,
    description,
    dueDate,
    isDone,
    completedDate
  } = item;

  return (
    <ListGroupItem key={id} className={isDone ? "redo-item" : "todo-item"} >
      <div className="flex todo-item-primary">
        {!isDone ? <p className="todo-desc margin-0">{description}</p>
          : <p className="done-desc margin-0">{description}</p>}
        <Button
          variant={!isDone ? "outline-primary" : "outline-secondary"}
          className="todo-done-button"
          onClick={() => handleActionClicked(id)}
        >
          {!isDone ? "Done" : "Redo"}
        </Button>
      </div>
      {isDone ? <div className="due-date">Completed: {moment(completedDate).format("MMM Do, YYYY - LTS")}</div>
        : dueDate ? <div className="due-date">Due: {moment(dueDate).format("MMM Do YYYY")}</div>
          : null}
    </ListGroupItem>
  )
}

export default ListItem;
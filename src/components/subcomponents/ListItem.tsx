import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { TodoItem } from '../List';
import { FormControl } from 'react-bootstrap';

interface ListItemProps {
  item: TodoItem,
  handleActionClicked: Function,
  handleNewDescription: Function
}

const ListItem = (props: ListItemProps) => {
  const { item, handleActionClicked, handleNewDescription } = props;

  const {
    id,
    description,
    dueDate,
    isDone,
    completedDate
  } = item;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(description);

  const handleValueChanged = (value: string) => {
    setValue(value);
  }

  /**
   * Once we are done editing and value is different than the original description,
   * update new description value to list.
   */
  useEffect(() =>{
    if (!isEditing && value !== description) {
      handleNewDescription(id, value, isDone);
    }
  }, [id, isEditing, handleNewDescription, value, isDone, description])

  return (
    <ListGroupItem key={id} className={isDone ? "redo-item" : "todo-item"} >
      <div className="flex todo-item-primary">
      {isEditing ?
        <FormControl
          className="todo-input margin-right-1"
          onChange={(event) => handleValueChanged(event.target.value)}
          onKeyPress={(e: React.KeyboardEvent) => {
            if(e.key === 'Enter') {
              setIsEditing(false)
            }
          }}
          value={value}
        />
      :
        <p
          onClick={() => setIsEditing(true)}
          className={`${isDone ? 'done': 'todo'}-desc`}
        >
          {description}
        </p>
      }
        <Button
          variant={!isDone ? "outline-primary" : "outline-secondary"}
          className="todo-done-button"
          onClick={
            isEditing ? () => setIsEditing(false)
            : () => handleActionClicked(id)
          }
        >
          {!isDone || isEditing ? "Done" : "Redo"}
        </Button>
      </div>
      {isDone ? <div className="due-date">Completed: {moment(completedDate).format("MMM Do, YYYY - LTS")}</div>
        : dueDate ? <div className="due-date">Due: {moment(dueDate).format("MMM Do YYYY")}</div>
          : null}
    </ListGroupItem>
  )
}

export default ListItem;

import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';

import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import { TodoItem } from '../List';
import { FormControl } from 'react-bootstrap';
import { cleanup } from '@testing-library/react';

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

  const inputRef = useRef<any>(null);

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

  /**
   * Focus or input box once we enter editing mode
   */
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing])

  return (
    <ListGroupItem key={id} className={isDone ? "redo-item" : "todo-item"} >
      <div className="flex todo-item-primary">
      {isEditing ?
        <FormControl
          ref={inputRef}
          className="todo-input margin-right-1"
          onChange={(event) => handleValueChanged(event.target.value)}
          onBlur={() => {
            setValue(description);
            setIsEditing(false)
          }}
          onKeyPress={(e: React.KeyboardEvent) => {
            if(e.key === 'Enter') {
              setIsEditing(false)
            }
          }}
          value={value}
        />
      :
        <button
          onClick={() => setIsEditing(true)}
          className={`${isDone ? 'done': 'todo'}-desc no-button-styles`}
        >
          {value}
        </button>
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

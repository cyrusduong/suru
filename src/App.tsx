import React, { useCallback, useRef, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import Toolbar from './components/Toolbar';
import Header from './components/Header';
import List, { TodoItem } from './components/List';

//@ts-ignore
const FileSaver = require('file-saver');

function App() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [doneItems, setDoneItems] = useState<TodoItem[]>([]);
  const inputImportRef = useRef<any>(null);

  const handleImportClicked = () => {
    inputImportRef?.current?.click();
  }

  const handleFilesUploaded = async () => {
    const filesList = inputImportRef?.current?.files;
    const json = await filesList[0].text();
    const todoList = JSON.parse(json);
    setTodoItems(todoList.filter((item: TodoItem) => !item.isDone))
    setDoneItems(todoList.filter((item: TodoItem) => item.isDone))
  }

  /**
   * Write the todo list to JSON file
   */
  const handleExportClicked = useCallback(() => {
    const json = JSON.stringify([...doneItems, ...todoItems]);
    const blob = new Blob([json], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "todo.json")
  }, [doneItems, todoItems])

  return (
    <div className="app">
      <Toolbar
        onImportClicked={() => handleImportClicked()}
        onExportClicked={() => handleExportClicked()}
      />
      <Header />
      <List
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        doneItems={doneItems}
        setDoneItems={setDoneItems}
      />
      <input
        type="file"
        className="input-file-import"
        accept=".json"
        onChange={handleFilesUploaded}
        ref={inputImportRef}
      />
    </div >
  );
}

export default App;

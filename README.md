# する (su-ru)

`Suru` (to do) is a simple client sided react todo list. It allows export and import in a standarized `todo.json` format.

![Suru Preview](https://github.com/cyrusduong/suru/blob/master/preview.png)

## Todo JSON format

The todo JSON format is below. It consists of a very basic concept of `Todo Items`. 

These are then stored in an array. Which can then be exported and saved or imported and loaded into suru.

```json
[
  {
    id: string
    description: string
    isDone: boolean
    dueDate?: number
    completedDate?: number
    tags?: string[]
  }: TodoItem,
...
]
```

## Scripts

In the project directory

### `npm start`

Runs the app in developer mode.

### `npm run build`

Builds the app for production or deployment.

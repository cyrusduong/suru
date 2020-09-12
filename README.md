# する (su-ru)

`Suru` (to do) is a simple client sided react todo list. It allows export and import in a standarized `todo.json` format.

![Suru Preview](https://github.com/cyrusduong/suru/blob/master/preview.png)

## Todo JSON format

The todo JSON format is below. It consists of a very basic concept of `Todo Items`. The key values and their types are given. 

```
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

Example

```json
[
  {
    "id": "ltb40kc096l",
    "description": "Code",
    "isDone": true,
    "completedDate": 1599951673580
  },
  {
    "id": "c222u92a733",
    "description": "Exercise",
    "isDone": false
  }
]
```

## Future enhancements
* [ ] Clear list
* [ ] Due dates
* [ ] Tags
* [ ] Search via description or tags
* [ ] Archive todos
* [ ] Simple user login to retrieve from cloud
* [ ] User sync to cloud

## Scripts

In the project directory

### `npm start`

Runs the app in developer mode.

### `npm run build`

Builds the app for production or deployment.

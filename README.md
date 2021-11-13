# API for doctor opening hours applications

## Getting started
1. Run `yarn build` to build an app
2. Run `yarn start` to start a server

## API docs

### Routes

| ROUTE | METHOD | RESPONSE
|:-------------|:-------------|:-------------|
| `/occupied-items` | **GET** | `Moment[]` |
| `/reservation` | **POST* | `Reservation` |

### Types
```javascript
type Reservation = {
  date: string;
  start: string;
  end: string;
};
```

#### Example
`http://localhost:3010/occupied-items`

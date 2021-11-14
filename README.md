# API for doctor opening hours applications

## Getting started
1. Run `yarn start` to build an app and start a server

## API docs

### Routes

| ROUTE | METHOD | RESPONSE
|:-------------|:-------------|:-------------|
| `/reservation/all` | **GET** | `Reservation[]` |
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

HobbyCard project

Usage:
- Import `HobbyApp` into your main `App.jsx` (replace current dashboard import) to preview the hobby cards:

```jsx
import HobbyApp from "./hobby/HobbyApp";

function App(){
  return <HobbyApp />;
}

export default App;
```

Notes:
- The `HobbyCard` component is reusable and accepts `name`, `description`, and `image` props.
- Up to 6 hobby cards are shown by default. Edit `src/hobby/HobbyApp.jsx` to change data.

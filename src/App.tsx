import { Provider } from "react-redux";
import { store } from "./redux";
import PackagesList from "./components/PackagesList";

function App() {
  return (
    <Provider store={store}>
      <h2>Search for a npm package</h2>
      <PackagesList />
    </Provider>
  );
}

export default App;

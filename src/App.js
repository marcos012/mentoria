import AppRoutes from "./Routes";
import './App.css';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;

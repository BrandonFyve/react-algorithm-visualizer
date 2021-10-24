import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BubbleSort from "./pages/BubbleSort/BubbleSort";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <BubbleSort />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

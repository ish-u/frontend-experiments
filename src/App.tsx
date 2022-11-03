import Grid from "./Pages/Grid";
import Home from "./Pages/Home";
import { Route } from "wouter";

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/grid" component={Grid} />
    </div>
  );
}

export default App;

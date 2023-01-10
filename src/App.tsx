import "./App.css";
import { Button, Card, Header } from "./Components";
import { RiAddFill } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <Header />
      <Button
        title="Add"
        iconType={RiAddFill}
        iconSize="s"
        onClick={() => {}}
      />
      <Card
        image="https://api.time.com/wp-content/uploads/2018/05/forest-bathing.jpg"
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClick={() => {}}
      ></Card>
    </div>
  );
}

export default App;

import Form from "./Form";
import "./styles.css";

export default function App() {
  const getdata = (data) => {
    console.log("coming from parent", data);
  };
  return (
    <div className="App">
      <Form onSubmit={getdata} />
    </div>
  );
}

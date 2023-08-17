import "./App.css";
import { userValidation } from "./Validation";

function App() {

const createUser = (event)=>{
  event.preventDefault();
  let formData={
    name:event.target[0].value,
    
  }
}

  return (
    <div className="App">
      <form className="form" onSubmit={createUser}>
        <input type="text" placeholder="type your name..." />
        <input type="email" placeholder="type your email..." />
        <input type="password" placeholder="type your password..." />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
}

export default App;

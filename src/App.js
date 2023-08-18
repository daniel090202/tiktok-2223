import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML And CSS"
  },
  {
    id: 2,
    name: "JavaScript"
  },
  {
    id: 3,
    name: "PHP"
  }
]

function handleSubmit() {

}

function App() {
  const [checked, setChecked] = useState()

  return (
    <div className="App">
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="radio"
            id={course.id}
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default App;

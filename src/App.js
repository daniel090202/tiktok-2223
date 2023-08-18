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

function App() {
  const [checked, setChecked] = useState([])

  function handleChecked(courseId) {
    setChecked(prev => {
      const isChecked = checked.includes(courseId)

      if(isChecked) {
        return checked.filter(id => id !== courseId)
      }
      else {
        return [...prev, courseId]
      }
    })
  }
  
  function handleSubmit() {
    return
  }

  return (
    <div className="App">
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="checkbox"
            id={course.id}
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
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

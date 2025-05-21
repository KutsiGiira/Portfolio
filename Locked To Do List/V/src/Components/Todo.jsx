import { useEffect, useState } from "react";

function Main() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/todos', {
      credentials: "include",
    method:"GET"
  })
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {setTodos(data), console.log(data)})
      .catch(error => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="text-center">
      <h1>Tasks:</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;

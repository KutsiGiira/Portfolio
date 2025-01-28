import React from 'react'

export const Dashboard = () => {
  return (
<>
    <form action='/Student.jsx' method="Post">
    <a href="Student.jsx">Add Student</a>
      <button type="submit">sent</button>
    </form>
    <form>
      <a href="" >Add Teacher</a>
    </form>
    <a href="./Student">Add Student</a>
</>
  );
};
export default Dashboard;
import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleUser = (uName, uAge) => {
    setUsers((prevState) => {
      return [...prevState, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser handleUser={handleUser} />
      <UsersList users={users} />
    </div>
  );
};

export default App;

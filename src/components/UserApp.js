import React, { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (user) => {
    setUserToEdit(user);
  };

  const cancelEdit = () => {
    setUserToEdit(null);
  };

  return (
    <div className="">
      <div className=" p-9 m-4 py-9 bg-blue-900 text-center">
        <h1 className="text-white pb-9 text-2xl">User Details</h1>
        <UserForm
          addUser={addUser}
          updateUser={updateUser}
          userToEdit={userToEdit}
          cancelEdit={cancelEdit}
        />
        <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
      </div>
    </div>
  );
};

export default UserApp;

import React from "react";

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <ul className="text-center text-white">
      {users.map((user) => (
        <li key={user.id}>
          <div className="bg-blue-300 m-4">
            <div className="text-sm">Name: {user.name}</div>
            <div className="text-sm">Email: {user.email}</div>
            <div className="text-sm">Phone: {user.phone}</div>
          </div>
          <button
            className="bg-blue-400 p-2 m-3 rounded-lg "
            onClick={() => editUser(user)}
          >
            Edit
          </button>
          <button
            className="bg-red-700 p-2 m-3 rounded-lg"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

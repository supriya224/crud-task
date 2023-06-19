import React, { useState } from "react";

const UserForm = ({ addUser, updateUser, userToEdit, cancelEdit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    // Perform add or update based on userToEdit presence
    if (userToEdit) {
      updateUser({ id: userToEdit.id, name, email, phone });
      cancelEdit();
    } else {
      addUser({ name, email, phone });
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" m-auto text-md bg-white p-5 pl-4 shadow-black-100 "
    >
      <input
        className=" m-4 border-2 color border-blue-600 rounded-lg pl-4"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className=" m-4 border-2 color border-blue-600 rounded-lg pl-4"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className=" m-4 border-2 color border-blue-600 rounded-lg pl-4"
        type="num"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        className=" w-20 h-9 text-white bg-green-400 rounded-lg"
        type="submit"
      >
        {userToEdit ? "Update" : "Add"}
      </button>
      {userToEdit && (
        <button
          className=" w-20 h-9 text-white ml-3 bg-cyan-900 rounded-lg"
          type="button"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default UserForm;

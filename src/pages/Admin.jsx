import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/users.api";

export default function Admin() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);

      alert("User deleted successfully");

      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

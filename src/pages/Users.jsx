import { useEffect, useState } from "react";
import { getUsers } from "../services/users.api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

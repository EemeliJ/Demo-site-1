"use client";
import { useState, useEffect } from "react";

export default function UsersClient() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
        if (err instanceof Error) {
          setError(`Failed to fetch users: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <ul style={{ padding: "1rem", listStyle: "none" }}>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            color: "#333",
          }} // some css styling for the results
        >
          <strong>{user.name}</strong> ({user.email})
          <br />
          Phone: {user.phone}
        </li>
      ))}
    </ul>
  );
}

// Fetching data from an external API, a json list of users
// Rendering the results in the client

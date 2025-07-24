import React, { useEffect, useState } from "react";
import { Input, Spin, Alert } from "antd";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal mengambil data pengguna.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFiltered(filteredUsers);
  }, [debouncedSearch, users]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Pengguna</h2>

      <Input
        placeholder="Cari nama pengguna..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full max-w-sm"
      />

      {loading ? (
        <div className="flex justify-center py-10">
          <Spin size="large" />
        </div>
      ) : error ? (
        <Alert type="error" message={error} showIcon />
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-3 font-semibold border-b pb-2">
            <div>Nama</div>
            <div>Email</div>
            <div>Alamat</div>
          </div>
          {filtered.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-3 border-b py-2 hover:bg-gray-50"
            >
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

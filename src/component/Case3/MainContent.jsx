import React, { useState } from "react";
import axios from "axios";
import { Alert, Typography, Button, Table } from "antd";

const { Title } = Typography;

export default function Case3() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        setUsers(response.data);
        setLoading(false);
      }, 3000); // 3 seconds delay
    } catch (err) {
      setTimeout(() => {
        setError("Gagal mengambil data pengguna.");
        setLoading(false);
      }, 3000); // 3 seconds delay
    }
  };

  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Alamat",
      dataIndex: "address",
      key: "address",
      render: (_, record) => {
        const { street, suite, city, zipcode } = record.address;
        return `${street}, ${suite}, ${city}, ${zipcode}`;
      },
    },
  ];

  return (
    <div>
      <header theme="light">
        <Title level={3} className="text-white text-center m-0 py-2">
          Daftar Pengguna
        </Title>
      </header>

      <div className="p-6">
        <div className="mb-4 flex justify-center">
          <Button type="primary" onClick={fetchUsers} loading={loading}>
            Ambil Data Pengguna
          </Button>
        </div>

        {error && (
          <Alert message={error} type="error" showIcon className="mb-4" />
        )}

        {users.length > 0 && (
          <Table
            dataSource={users}
            columns={columns}
            rowKey="id"
            bordered
            pagination={false}
          />
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { getUsers } from "../../services/userServices.ts";

type UserType = {
  id?: number;
  name: string;
  email: string;
};

export default function User() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();

        console.log("USER DATA:", res.data);

        const data = res.data.data;

        if (Array.isArray(data)) {
          setUsers(data);
        } else if (data?.user) {
          setUsers([data.user]);
        } else if (data?.id) {
          setUsers([data]); // ← INI YANG KEPAKE SEKARANG
        } else {
          setUsers([]);
        }
      } catch (err: any) {
        console.log("GET USERS ERROR:", err.response?.data || err);

        setError(
          err.response?.data?.message || "Gagal mengambil data user."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="p-8">Loading...</p>;
  }

  if (error) {
    return <p className="p-8 text-red-500">{error}</p>;
  }

  if (users.length === 0) {
    return <p className="p-8">Data user kosong</p>;
  }

  return (
    <section className="container px-8 py-10 mx-auto">
      {users.map((user, index) => (
        <Card
          key={user.id || index}
          shadow={false}
          className="mb-5 border border-gray-300 rounded-2xl"
        >
          <CardHeader shadow={false} className="h-60 !rounded-lg">
            <img
              src="https://www.material-tailwind.com/_next/image?url=%2Fimage%2Fdark-image.png&w=1080&q=75"
              alt="banner"
              className="object-center w-full h-full"
            />
          </CardHeader>

          <CardBody>
            <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-0">
              <div className="flex items-center gap-3">
                <Avatar
                  src="https://i.pravatar.cc/150?img=3"
                  alt="avatar"
                  variant="rounded"
                />

                <div>
                  <Typography color="blue-gray" variant="h6">
                    {user.name}
                  </Typography>

                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {user.email}
                  </Typography>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outlined"
                  className="flex items-center gap-2 border-gray-300"
                >
                  Github
                </Button>

                <Button
                  variant="outlined"
                  className="flex items-center gap-2 border-gray-300"
                >
                  Twitter
                </Button>

                <Button
                  variant="outlined"
                  className="flex items-center gap-2 border-gray-300"
                >
                  Medium
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}
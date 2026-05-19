import { useEffect, useState } from "react";
import api from "../../api/api";

export default function Header() {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user");
        if (response.data.success) {
          setUserName(response.data.data.name);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="flex justify-between p-5 md:border-b md:border-gray-200">
      <div>
        <p>Welcome Back-!</p>
        <h4>{userName ? `${userName}` : ""}</h4>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-neutral-200 rounded-full" />
      </div>
    </header>
  );
}
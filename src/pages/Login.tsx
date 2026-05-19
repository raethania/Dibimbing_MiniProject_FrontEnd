import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import FormField from "../components/auth/FormField";
import AuthMessage from "../components/auth/AuthMessage";
import api from "../api/api";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await api.post("/auth/login", { email, password });
      login(response.data.data.token);
      setMessage("Login berhasil.");
      setTimeout(() => navigate("/home"), 1000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Login gagal. Periksa kembali data.");
    }
  };

  return (
    <AuthLayout>
      <header className="mb-10 text-center">
        <h1 className="mb-4 text-5xl">Welcome Back</h1>
        <p>Please enter your details.</p>
        <AuthMessage message={message} error={error} />
      </header>

      <form onSubmit={handleLogin} className="flex flex-col">
        <FormField
          label="Email Address"
          id="email"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={setEmail}
        />
        <FormField
          label="Password"
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
        />
        <button type="submit" className="button-primary">Login</button>
      </form>

      <p className="mt-5 text-[18px]">
        Don't have an account? <Link to="/register" className="text-blue-800 font-semibold underline">Sign Up</Link>
      </p>
    </AuthLayout>
  );
}
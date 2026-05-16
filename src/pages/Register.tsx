import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import FormField from "../components/auth/FormField";
import AuthMessage from "../components/auth/AuthMessage";
import api from "../api/api";

const DEFAULT_ROLE = "student";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");
    setError("");

    try {
      await api.post("auth/register/", {
        name, email, password, role: DEFAULT_ROLE,
      });
      setMessage("Register berhasil. Silakan login.");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Register gagal. Periksa kembali data.");
    }
  };

  return (
    <AuthLayout>
      <header className="mb-10 text-center">
        <h1 className="mb-4 text-5xl">Create a New Account</h1>
        <p>Please enter your details.</p>
        <AuthMessage message={message} error={error} />
      </header>

      <form onSubmit={handleRegister} className="flex flex-col">
        <FormField
          label="Name"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={setName}
        />
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
        <button type="submit" className="button-primary">Register</button>
      </form>

      <p className="mt-5 text-[16px]">
        Already have an account? <Link to="/login" className="text-blue-800 font-semibold underline">Sign In</Link>
      </p>
    </AuthLayout>
  );
}
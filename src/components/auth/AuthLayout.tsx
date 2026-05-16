import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="p-3 h-dvh w-dvw">
      <div className="flex h-full gap-10 mx-auto max-w-400">
        <div className="self-center flex-1 mx-5">{children}</div>
        <div className="flex-1 hidden bg-gray-400 rounded-lg md:block" />
      </div>
    </div>
  );
}
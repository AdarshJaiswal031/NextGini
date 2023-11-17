import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-center justify-center items-center h-full">
      {children}
    </div>
  );
}

export default AuthLayout;

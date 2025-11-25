"use client";

import { AuthContext } from "@/Context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { use, useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      // redirect to login with original path
      router.replace(`/login?redirect=${pathname}`);
    }
  }, [user, loading, router, pathname]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center">
       <span className="loading loading-dots loading-xl"></span>
      </div>
    )
  }

  return children;
};

export default PrivateRoute;

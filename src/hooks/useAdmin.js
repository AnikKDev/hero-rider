import { useEffect, useState } from "react";
import { axiosInstace } from "../utils/axiosInstance";

const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosInstace("/me", {
        headers: { authorization: `Bearer ${token}` },
      }).then((res) => {
        if (res?.data?.role == "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
    }
  }, []);

  return isAdmin;
};

export default useIsAdmin;

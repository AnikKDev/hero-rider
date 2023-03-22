import { useEffect, useState } from "react";
import { axiosInstace } from "../utils/axiosInstance";

const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
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
  }, [token, setIsAdmin]);
  console.log(isAdmin);
  return isAdmin;
};

export default useIsAdmin;

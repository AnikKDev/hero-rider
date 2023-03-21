import { axiosInstace } from "../../utils/axiosInstance";

const useGetValidation = async (token) => {
  const { data } = await axiosInstace("/me", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return data;
};
export default useGetValidation;

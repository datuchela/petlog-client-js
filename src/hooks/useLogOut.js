import { useMutation } from "react-query";
import { logout } from "../api/methods";
import useAuth from "./useAuth";

const useLogOut = () => {
  const { setAuth } = useAuth();

  const mutation = useMutation(logout, {
    onSuccess: () => {
      return setAuth({ user: null, accessToken: null });
    },
  });

  const logOut = async () => {
    return mutation.mutate();
  };

  return logOut;
};

export default useLogOut;

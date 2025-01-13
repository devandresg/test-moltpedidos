import { setToken } from "../../features/apiauth/apiAuthSlice";
import performRequest, {
  PerformRequestProps,
} from "../../services/api/services";

interface AuthData {
  username: string;
  password: string;
}

export const login = (authData: AuthData) => async (dispatch: any) => {
  const request: PerformRequestProps = {
    method: "POST",
    url: "accounts/login",
    data: authData,
  };

  try {
    const response = await performRequest(request);
    if (response.access) {
      dispatch(setToken(response.access));
      return response;
    } else {
      console.log("entra");
      return response.message;
    }
  } catch (error) {
    console.error("Error fetching Login:", error);
    throw error;
  }
};

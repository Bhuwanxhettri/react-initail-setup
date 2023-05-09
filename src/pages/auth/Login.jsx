import React from "react";
import { setToken, clearToken } from "./redux/authSlice";
import { useDispatch } from "react-redux";
import { persistor } from "../../store/index";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Login
      <br></br>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch(setToken("token1234"));
        }}
      >
        setToken
      </button>
      <br></br>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          dispatch(clearToken());
          persistor.purge();
        }}
      >
        RemoveToken
      </button>
    </div>
  );
};

export default Login;

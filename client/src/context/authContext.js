import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storeUser = localStorage.getItem("user");
  let storedUsers;
  try {
    storedUsers = JSON.parse(storeUser);
  } catch (error) {
    console.error("error parsing user data from local storage", error);
  }
  const [currentUser, setCurrentUser] = useState(storedUsers || null);

  const login = async (inputs) => {
    const res =await  axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

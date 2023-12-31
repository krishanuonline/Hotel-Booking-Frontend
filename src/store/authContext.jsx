import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user data is stored in localStorage on page load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsloading(false);
  }, []);

  const login = async (userData) => {
    try {
      setIsloading(true);
      // Perform login logic and set the user
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/users/login`,
        data: userData,
        withCredentials: true,
      });
      setUser(response.data.user);
      setIsloading(false);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/");
    } catch (error) {
      setIsloading(false);
      setError(error.message);
    }
  };
  const signup = async (userData) => {
    try {
      setIsloading(true);
      // Perform signup logic and set the user
      const response = await axios({
        method: "POST",
        url: `${BASE_URL}/users/signup`,
        data: userData,
        withCredentials: true,
      });
      setIsloading(false);
      if (response.data.status) navigate("/login");
    } catch (error) {
      setError(error.message);
      setIsloading(false);
    }
  };

  const logout = () => {
    // Perform logout logic and clear the user
    setUser(null);
    // Remove user data from localStorage
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, error, user, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

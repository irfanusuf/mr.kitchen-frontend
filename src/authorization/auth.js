import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IsAuthenticated = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, [token, navigate]);
};


export default IsAuthenticated
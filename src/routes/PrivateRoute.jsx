import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../redux/Auth/authSelectors";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
    return isLoggedIn ? children : <Navigate to="/login" replace/>;
  };
  
  export default PrivateRoute;
  
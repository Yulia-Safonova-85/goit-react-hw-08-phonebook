import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../redux/Auth/authSelectors";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.getIsRefreshing);

    const shouldRedirect = !isRefreshing && !isLoggedIn;
    return shouldRedirect ? <Navigate to="/login"/> :  children ;
  };
  
  export default PrivateRoute;
  
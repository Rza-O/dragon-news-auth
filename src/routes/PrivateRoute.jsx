import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingComp from "../pages/LoadingComp";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <LoadingComp></LoadingComp>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;
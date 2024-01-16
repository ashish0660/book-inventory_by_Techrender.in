import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

function Logout() {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const path = location.state?.form?.pathname || "/";

    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert("Sign Out Sucessfully")
            navigate(path, {replace: true});
          }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
        <button className="bg-red-700 px-8 py-2 text-white rounded" onClick={handleLogout}>Logout</button></div>
  )
}

export default Logout
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // In first case
    // When we have authentication = true and authStatus = false then we navigate to login
    // In second case
    // When we have authentication = false and authStatus = true then we navigate to /
    // We set loader to false once both conditions are checked.

    // Another example to do it easy way
    // if (authStatus === false) {
    //   navigate("/login");
    // } else if (authStatus === true) {
    //   navigate("/");
    // }

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <div>{children}</div>;
}

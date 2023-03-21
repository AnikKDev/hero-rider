import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="h-screen text-center flex justify-center items-center">
      <div>
        <h1 className="text-3xl">Someothing went wrong</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary btn-sm my-16 block mx-auto"
        >
          Take Me Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

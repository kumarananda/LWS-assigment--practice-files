/** @format */

import React, { useState } from "react";
import { useLoginMutation } from "../../../features/auth/authApi";
import Error from "../../ui/InfoMsg/Error";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();
  // Form data state // Admin login form
  const [formData, setFormData] = useState({ email: "", password: "" });
  // Handle form data
  const handleFormData = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(error);

  //Handle form submit // Admin login form
  const HandleLoginSubmit = e => {
    e.preventDefault();

    login({
      role: "admin",
      data: { email: formData.email, password: formData.password },
    })
      .then(res => {
        console.log(res.data.user.role);
        if (res.data.user.role === "admin") {
          navigate("/admin/dashbord");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={HandleLoginSubmit} className="mt-8 space-y-6" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              onChange={handleFormData}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="login-input rounded-t-md"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              onChange={handleFormData}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="login-input rounded-b-md"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="text-sm">
            <a href="#" className="font-medium text-violet-600 hover:text-violet-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Sign in
          </button>
        </div>
        <div className="formInfoMsg">{isError && <Error message={error.data} />}</div>
      </form>
    </>
  );
};

export default AdminLoginForm;

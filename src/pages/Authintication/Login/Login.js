import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <section className=" min-h-screen flex  justify-center">
      <div className="bg-[#F7FAFC] flex  lg:w-2/3 w-auto  p-2 items-center lg:pl-32 lg:pr-28">
        <div className="px-4 md:px-16">
          <h2 className="font-semibold text-xl text-[#002D74] mb-2 mt-12">
            Sign in
          </h2>
          <p className=" invisible">
            Use your Google or LinkedIn account or enter your email and password
            below to access your account.
          </p>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">
                  Email
                  <span className=" text-red-500 ml-2 font-semibold">*</span>
                </span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full bg-white"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                {" "}
                <span className="label-text">
                  Password
                  <span className=" text-red-500 ml-2 font-semibold">*</span>
                </span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full bg-white"
              />

              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <input
              className="btn  text-white border-blue-500 bg-[#1863E5] hover:bg-[#1863E5] w-full mt-3"
              value="Sign In"
              type="submit"
            />
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>

          <div className="lg:flex justify-between">
            <div className="mt-12 text-xs font-medium flex items-center ">
              <p className="text-xs font-medium">Don`t have an account?</p>
              <Link className="ml-3 text-[#1863E5]" to="/register">
                Sign Up
              </Link>
            </div>
            <div className="mt-3  lg:mt-12 flex items-center">
              {/* <p className="text-xs font-medium">Forgot your password?</p> */}
              {/* <Link className="ml-3 text-[#1863E5] text-xs font-medium " to="/">
                Recover my password
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="m bg-red md:block hidden w-1/2  bg-gradient-to-b from-purple-500 via-indigo-500 to-indigo-500">
        <div>
          <h1 className=" text-5xl font-bold mt-28 ml-16 text-white">
            Welcome back to <br /> refer.me!
          </h1>
          <h1 className="ml-16 text-white font-semibold text-xl mt-6">
            {" "}
            Sign in in to your account to access our platform.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Login;

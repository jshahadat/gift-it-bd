import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useToken from "../../../hooks/useToken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [ConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!ConfirmPasswordVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
          role: data.option,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.option);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://assignment-twelfth-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <section className="min-h-screen flex  justify-center">
      <div className="bg-[#F7FAFC] flex  lg:w-2/3 w-auto  p-2 items-center lg:pl-32 lg:pr-28">
        <div className="px-4 md:px-16">
          {/* <Link className="flex" to="/">
            <span></span>
            <span>Back to refer.me</span>
          </Link> */}
          <h2 className="font-semibold text-xl text-[#002D74] mb-2 mt-12">
            Create an account
          </h2>
          <p className=" invisible">
            Use your Google or LinkedIn account or enter your information to
            create your account.
          </p>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="lg:flex">
              <div className="form-control w-full lg:mr-3">
                <label className="label">
                  {" "}
                  <span className="label-text">
                    First Name
                    <span className=" text-red-500 ml-1 font-semibold">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "First Name is Required",
                  })}
                  className="input input-bordered w-full bg-white"
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="form-control w-full lg:ml-3">
                <label className="label">
                  {" "}
                  <span className="label-text">
                    Last Name
                    <span className=" text-red-500 ml-1 font-semibold">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "Last Name is Required",
                  })}
                  className="input input-bordered w-full bg-white"
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                {" "}
                <span className="label-text">
                  Email
                  <span className=" text-red-500 ml-1 font-semibold">*</span>
                </span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="input input-bordered w-full bg-white"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Password
                  <span className=" text-red-500 ml-1 font-semibold">*</span>
                </span>
              </label>

              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                  className="input input-bordered w-full pr-10 bg-white"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="mt-2 mb-3 text-xs font-medium flex items-center">
              <p className="text-xs font-medium">
                A minimum of 6 characters must be used, with 1 uppercase, 1
                lowercase, 1 number, and 1 special character.
              </p>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Confirm Password
                  <span className=" text-red-500 ml-1 font-semibold">*</span>
                </span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="input input-bordered w-full bg-white"
                />

                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={ConfirmPasswordVisible ? faEyeSlash : faEye}
                  />
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <input
              className="btn text-white hover:bg-[#1863E5] bg-[#1863E5] w-full border-none mt-4 capitalize"
              value="Create Account"
              type="submit"
            />
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </form>

          <div className="mt-8 text-xs font-medium flex items-center justify-center text-[#1863E5]">
            <p className="text-xs font-medium">Already have an account?</p>
            <Link className="ml-3 text-[#1863E5]" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>

      <div className="m bg-red md:block hidden w-1/2  bg-gradient-to-b from-purple-500 via-indigo-500 to-indigo-500"></div>
    </section>
  );
};

export default Register;

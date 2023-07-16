/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layouts/Header";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser } from "../../redux/features/users/userSlice";
interface SignupFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<SignupFormInputs>();
  const navigate = useNavigate();
  const disPatch = useAppDispatch();
  const onSubmit = (data: SignupFormInputs) => {
    if (data.password !== data.confirmPassword) {
      setError("Two password did not match");
      return;
    }
    disPatch(createUser({ email: data.email, password: data.password }));
  };
  const { user } = useAppSelector((state) => state.user);
  if (user.email) {
    navigate("/");
  }
  return (
    <div>
      <Header />
      <div className="container mt-4 w-96 mx-auto px-8 border-2 rounded-md">
        <h2 className="text-4xl text-center my-5 text-slate-600">
          Create an account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: "Email is required" })}
            className="border px-3 py-1 mb-3 w-full"
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            required
          />
          <br />
          <input
            {...register("password", { required: "password is required" })}
            className="border px-3 py-1 mb-3 w-full"
            type="password"
            placeholder="Enter password"
            required
          />
          <br />
          <input
            {...register("confirmPassword", {
              required: "Confrim Password is required",
            })}
            className="border px-3 py-1 mb-3 w-full"
            type="password"
            placeholder="Enter Confirm password"
            required
          />
          <br />
          <p className="text-red-600">{error}</p>
          <input
            className=" px-3 py-1 bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded mt-5 duration-200 cursor-pointer w-full"
            type="submit"
            value="Sign Up"
          />
          <h2 className="my-5">
            Have an account?{" "}
            <Link className="text-blue-600 hover:underline" to="/login">
              Login
            </Link>{" "}
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

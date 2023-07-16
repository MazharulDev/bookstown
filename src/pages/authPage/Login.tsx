/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../layouts/Header";
import { loginUser } from "../../redux/features/users/userSlice";

interface SignupFormInputs {
  email: string;
  password: string;
}
const Login = () => {
  const { register, handleSubmit } = useForm<SignupFormInputs>();
  const disPatch = useAppDispatch();
  const onSubmit = (data: SignupFormInputs) => {
    disPatch(loginUser({ email: data.email, password: data.password }));
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { user } = useAppSelector((state) => state.user);
  if (user.email) {
    navigate(from, { replace: true });
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
            className=" px-3 py-1 bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded mt-5 duration-200 cursor-pointer w-full"
            type="submit"
            value="Login"
          />
          <h2 className="my-5">
            Create an account?{" "}
            <Link className="text-blue-600 hover:underline" to="/signup">
              signup
            </Link>{" "}
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { Button } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "../components";
import { ILoginData } from "../types/types";

export const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({ mode: "onChange" });
  const submitForm: SubmitHandler<ILoginData> = ({ username, password }) => {
    console.log(username, password);
    reset();
  };
  return (
    <form
      className="d-flex flex-column w-25 mx-auto
  mt-5 input-group"
      onSubmit={handleSubmit(submitForm)}
    >
      <h2 className="text-black text-center">Login</h2>
      <div className="d-flex gap-2 flex-column mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "Username is required",
            minLength: { value: 5, message: "Minimum characters 5" },
          })}
        />
        {errors.username && <ErrorMessage message={errors.username.message} />}
      </div>
      <div className="d-flex gap-2 flex-column mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum characters 6" },
          })}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>
      <Button type="submit">Sign in</Button>
    </form>
  );
};

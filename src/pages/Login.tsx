import { Button } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "../components";
import { auth, login } from "../http/userApi";
import userStore from "../store/userStore";
import { ILoginData } from "../types/types";

export const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({ mode: "onChange" });
  const submitForm: SubmitHandler<ILoginData> = async (loginData) => {
    try {
      await login(loginData);
      const token = await auth();
      if (token) {
        userStore.setAuth(true);
      }
    } catch (e: any) {
      alert(e.response.data.message);
    }
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
            minLength: { value: 2, message: "Minimum characters 2" },
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
            minLength: { value: 1, message: "Minimum characters 1" },
          })}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>
      <Button type="submit">Sign in</Button>
    </form>
  );
};

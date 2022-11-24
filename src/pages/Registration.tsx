import { Button } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "../components/ErrorMessage";
import { IRegistrationData } from "../types/types";

export const Registration = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationData>({ mode: "onBlur" });
  const submitForm: SubmitHandler<IRegistrationData> = ({ username, password }) => {
    console.log(username, password);
    reset();
  };
  return (
    <form
      className="d-flex flex-column w-25 mx-auto
  mt-5 input-group"
      onSubmit={handleSubmit(submitForm)}
    >
      <h2 className="text-black text-center">Registration</h2>
      <div className="d-flex gap-2 flex-column mb-3">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="form-control"
          {...register("username", {
            required: "Username is required",
            minLength: { value: 5, message: "Minimum characters 5" },
          })}
        />
        {errors.username && <ErrorMessage message={errors.username.message} />}
      </div>
      <div className="d-flex gap-2 flex-column mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum characters 6" },
          })}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>
      <div className="d-flex gap-2 flex-column mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          {...register("name", { required: true })}
        />
      </div>
      <div className="d-flex gap-2 flex-column mb-3">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" {...register("name")} />
      </div>
      <div className="d-flex gap-2 flex-column mb-3">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="form-control" {...register("name")} />
      </div>
      <Button type="submit">Sign up</Button>
    </form>
  );
};

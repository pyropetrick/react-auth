import { Button, Card } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "../components/ErrorMessage";
import { auth, registration } from "../http/userApi";
import userStore from "../store/userStore";
import { IRegistrationData } from "../types/types";

export const Registration = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationData>({ mode: "onBlur" });
  const submitForm: SubmitHandler<IRegistrationData> = async (formData) => {
    try {
      await registration(formData);
      reset();
      const token = await auth();
      if (token) {
        userStore.setAuth(true);
      }
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
  return (
    <form
      className="d-flex flex-column w-25 mx-auto
  mt-5 input-group"
      onSubmit={handleSubmit(submitForm)}
    >
      <Card className="p-3 rounded">
        <h2 className="text-black text-center">Registration</h2>
        <div className="d-flex gap-2 flex-column mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 2, message: "Minimum characters 2" },
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
              minLength: { value: 1, message: "Minimum characters 1" },
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
            {...register("email", { required: true })}
          />
        </div>
        <div className="d-flex gap-2 flex-column mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" {...register("name")} />
        </div>
        <div className="d-flex gap-2 flex-column mb-3">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" className="form-control" {...register("lastname")} />
        </div>
        <Button type="submit" variant="primary" className="rounded">
          Sign up
        </Button>
      </Card>
    </form>
  );
};

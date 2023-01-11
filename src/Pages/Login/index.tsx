import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ILoginFormInput {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();
  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("email", { required: "Required" })} />
      <p>{errors.email?.message}</p>
      <label>Gender Selection</label>
      <input {...register("password", { required: "Required" })} />
      <p>{errors.password?.message}</p>
      <input type="submit" />
    </form>
  );
};

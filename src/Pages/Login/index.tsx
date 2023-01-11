import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContainer } from "../../Layouts";
import styles from "./Login.module.scss";
import { Button } from "../../Components";

interface ILoginFormInput {
  email: string;
  password: string;
}

//for registration
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();
  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <FormContainer>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <input
            placeholder="Email"
            {...register("email", { required: "Required" })}
          />
          {errors.email?.message && (
            <p className={styles.error}>{errors.email?.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <input
            placeholder="Password"
            {...register("password", { required: "Required" })}
          />
          {errors.password?.message && (
            <p className={styles.error}>{errors.password?.message}</p>
          )}
        </div>
        <Button
          className={styles.submit}
          title="Submit"
          type="submit"
        />
      </form>
    </FormContainer>
  );
};

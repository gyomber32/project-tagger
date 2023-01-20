import React, { useState } from "react";
import { useLogin } from "../../Hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormContainer } from "../../Layouts";
import styles from "./Login.module.scss";
import { Button, HasAccount } from "../../Components";
import { Address, User } from "../../Types";

interface ILoginFormInput {
  email: string;
  password: string;
}

interface IRegisterFormInput extends User {}
//for registration
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const login = useLogin();
  const {
    register: loginFormRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<ILoginFormInput>();
  const {
    register: registerFormRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = useForm<IRegisterFormInput>();
  const onLoginSubmit: SubmitHandler<ILoginFormInput> = ({
    email,
    password,
  }) => {
    console.log(email, password);
    login(email, password);
  };

  const onRegisterSubmit: SubmitHandler<IRegisterFormInput> = ({
    firstName,
    lastName,
    email,
    password,
    address,
    phone,
    isReceivingEmail,
  }) => {
    // TODO register()
  };

  return (
    <FormContainer>
      {isRegistered ? (
        <form
          className={styles.container}
          onSubmit={handleLoginSubmit(onLoginSubmit)}
        >
          <div className={styles.field}>
            <input
              placeholder="Email"
              {...loginFormRegister("email", { required: "Required" })}
            />
            {loginErrors.email?.message && (
              <p className={styles.error}>{loginErrors.email?.message}</p>
            )}
          </div>
          <div className={styles.field}>
            <input
              placeholder="Password"
              {...loginFormRegister("password", { required: "Required" })}
            />
            {loginErrors.password?.message && (
              <p className={styles.error}>{loginErrors.password?.message}</p>
            )}
          </div>
          <Button className={styles.submit} title="Submit" type="submit" />
          <HasAccount
            hasAccount={isRegistered}
            onClick={() => setIsRegistered((value) => !value)}
          />
        </form>
      ) : (
        <form
          className={styles.container}
          onSubmit={handleRegisterSubmit(onRegisterSubmit)}
        >
          <div className={styles.field}>
            <input
              placeholder="Email"
              {...registerFormRegister("email", { required: "Required" })}
            />
            {registerErrors.email?.message && (
              <p className={styles.error}>{registerErrors.email?.message}</p>
            )}
          </div>
          <div className={styles.field}>
            <input
              placeholder="Password"
              {...registerFormRegister("password", { required: "Required" })}
            />
            {registerErrors.password?.message && (
              <p className={styles.error}>{registerErrors.password?.message}</p>
            )}
          </div>
          <Button className={styles.submit} title="Submit" type="submit" />
          <HasAccount
            hasAccount={isRegistered}
            onClick={() => setIsRegistered((value) => !value)}
          />
        </form>
      )}
    </FormContainer>
  );
};

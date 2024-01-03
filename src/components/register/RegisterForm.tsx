import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormType, UserDataType, setUser, } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styleForm from "../../pages/styles/payOrder.module.scss";

const RegisterForm: React.FC = () => {
  const [userError, setUserError] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormType>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    if (isValid) {
      fetch(`${process.env.REACT_APP_MOCKAPI}/users`)
        .then((resp) => resp.json())
        .then((json) => {
          const useName = json.find((obj: UserDataType) => obj.email === data.email);
          setUserError(false);
          const myId = json.length + 1;
          const firstName = data.firstName.trim().slice(0,1).toUpperCase() + data.firstName.slice(1);

          if (!useName) {
            const userData: UserDataType = {
              myId,
              firstName,
              email: data.email,
              password: data.password,
              orders: [],
            };

            localStorage.setItem("userID", String(myId));

            dispatch(setUser(userData));
            const json = JSON.stringify(userData);

            fetch(`${process.env.REACT_APP_MOCKAPI}/users`, {
              method: "POST",
              body: json,
              headers: {
                "content-type": "application/json",
              },
            })
              .then((data) => data.text())
              .catch((e) => alert(e))
            ;
            reset();
            navigate("/account", { relative: "path" });

          } else {
            setUserError(true);
          }
        })
        .catch((error) => console.log(error));
        reset();
    }
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit(onSubmit)}
      className={styleForm.form}
    >
      <div className={styleForm.formContent}>
        <div className="inputBlock">
          <label>
            <b>*</b> First name:
          </label>
          <input
            {...register("firstName", {
              required: "Fild is required.",
              minLength: {
                value: 2,
                message: "Min 2 lettrs",
              },
              maxLength: {
                value: 10,
                message: "Max 10 letters",
              },
              pattern: {
                value: /[a-z]/,
                message: "Invalid name",
              },
            })}
          />
          <p className={errors.firstName?.message ? styleForm.error : ""}>
            {errors.firstName?.message || "Error"}
          </p>
        </div>
        <div className="inputBlock">
          <label>
            <b>*</b> E-mail:
          </label>

          <input
            {...register("email", {
              required: "Fild is required.",
              maxLength: {
                value: 50,
                message: "Max 50 letters",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: "Your E-mail is not valid.",
              },
            })}
          />
          <p className={errors.email?.message || userError ? styleForm.error : ""}>
            {errors.email?.message || "This user already exists"}
          </p>
        </div>
        <div className="inputBlock">
          <label>
            <b>*</b> Password:
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Fild is required.",
              maxLength: {
                value: 30,
                message: "Max 50 letters",
              },
              minLength: {
                value: 6,
                message: "Min 6 letters",
              },
              pattern: {
                value: /^\S+$/,
                message: "Your password is not valid.",
              },
            })}
          />
          <p className={errors.password?.message ? styleForm.error : ""}>
            {errors.password?.message || "Error"}{" "}
          </p>
        </div>
      </div>
      <button className="button" disabled={!isValid}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

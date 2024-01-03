import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import styleForm from '../../pages/styles/payOrder.module.scss';
import { FormType, UserDataType, fetchUsers, removeUser, setUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import '../../firebase';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {

    const [userError, setUserError] = React.useState(false);
    const [errorPasswort, setErrorPassword] = React.useState(false);
    const [userPassword, setUserPassword] = React.useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm<FormType>({
        mode: "onChange"
    });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    if(isValid) {

      fetch(`${process.env.REACT_APP_MOCKAPI}/users`)
        .then(resp => resp.json())
        .then(json => {
          const useName = json.find((obj: UserDataType) => obj.email === data.email);
            setUserError(false);

            if(!useName) {
              setUserError(true);
              return;
            };

            if(useName.password !== data.password) {
              setErrorPassword(true);
              return
            };

            setUserError(false);
            setErrorPassword(false);
            dispatch(setUser(useName));
            localStorage.setItem('userID', useName.id);
            reset();
            navigate('/account', {relative: "path"})
        })
      .catch(error => console.log(error))
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styleForm.form}>
     <div className={styleForm.formContent}>
     <div className="inputBlock">
       <label>
         <b>*</b> E-mail: 
       </label>
         <input 
           {...register("email",  {
             required: 'Fild is required.',
             maxLength: {
               value: 50,
               message: "Max 50 letters"
             },
            pattern: {
             value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
             message: "Your E-mail is not valid."
           }
           })}
         />
       <p className={errors.email?.message || userError ? styleForm.error : ''}>{errors.email?.message || "E-mail is not correct"} </p> 
     </div>
     <div className="inputBlock">
       <label>
         <b>*</b> Password: 
       </label>
         <input type="password"
           {...register("password",  {
             required: 'Fild is required.',
             maxLength: {
               value: 30,
               message: "Max 50 letters"
             },
             minLength: {
               value: 6,
               message: "Min 6 letters"
             },
              pattern: {
              value: /^\S+$/,
              message: "Your password is not valid."
            },
            onChange: () => setErrorPassword(false)
           })}
         />
       <p className={errors.password?.message || errorPasswort ? styleForm.error : ''}>{errors.password?.message || "Password is not correct"} </p>
     </div>
     </div> 
    <button className="button" disabled={!isValid}>Enter in your account</button>
   </form>
  ) 
}

export default Login;


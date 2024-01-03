import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserDataType, changeEmail, changeName, changePassword, removeUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import changeUserData from '../../hooks/changeUserData';
import style from './personalData.module.scss';
import { removeAllItems } from '../../redux/cartSlise';

const testName = /(^[A-Z]{1}[a-z]{1,9})$/;
const testEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const testPassword = /^\S+$/g;

const PersonalData: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { firstName, email, password } = useSelector((state: RootState) => state.people.user);

  const [userName, setUserName] = React.useState({value: firstName, change: false, error: false});
  const [userEmail, setUserEmail] = React.useState({value: email, change: false, error: false, errorRegister: false});
  const [userPassword, setUserPassword] = React.useState({value: '', change: false, pasError: false, oldPasswordError: false, newPasswordError: false});

  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [isChangePassword, setIsChangePassword] = React.useState(false)

  const checkErrorsPass =  userPassword.oldPasswordError || userPassword.pasError || !userPassword.value  || !oldPassword  ? true : false;
  const checkErrorEmail = userEmail.error || userEmail.errorRegister || !userEmail.change ? true : false;

  const singOut = () => {
    localStorage.removeItem('userID');
    dispatch(removeUser());
    dispatch(removeAllItems());
    navigate('/register', {relative: "path"})
  };
  
  const onChangeName = () => {
    setUserName({... userName, value: firstName, change: true});
  };

  const cancelChangeName = () => {
    setUserName({...userName, change: false, error: false})
  };

  const checkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!testName.test(e.target.value)) {
      setUserName({...userName, value: e.target.value, error: true})
    } else { 
      setUserName({... userName, value: e.target.value, error: false});
    }
  };

  const saveName = () => {
    const data = JSON.stringify({firstName: userName.value})
    changeUserData(data);
    dispatch(changeName(userName.value));
    setUserName({... userName, change: false, error: false});
  };

  const onChangeEmail = () => {
    setUserEmail({... userEmail, value: email, change: true});
  };

  const cancelChangeEmail = () => {
    setUserEmail({... userEmail, value: '', change: false, error: false, errorRegister: false});
  };

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.value.match(testEmail)) {
      setUserEmail({...userEmail, error: true, value: e.target.value})
    } else {
      setUserEmail({...userEmail, error: false, value: e.target.value})
    }
  };

  const saveEmail = () => {
    
    fetch(`${process.env.REACT_APP_MOCKAPI}/users`)
    .then((resp) => resp.json())
    .then((json) => {
      const isUser = json.find((obj: UserDataType) => obj.email === userEmail.value);
      
      if(!isUser) {
        const data = JSON.stringify({email: userEmail.value})
        changeUserData(data);
        dispatch(changeEmail(userEmail.value));
        setUserEmail({... userEmail, change: false, error: false, errorRegister: false});
      } else {
          setUserEmail({...userEmail, error: false, errorRegister: true})
      }
    }).catch((error) => alert(error));
  };

  const checkOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value)
    if(password !== e.target.value && e.target.value.length) {
      setUserPassword({...userPassword, oldPasswordError: true,});
    } else {
      setUserPassword({...userPassword, oldPasswordError: false});
    }
  };

  const checkNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);

    if(!e.target.value.match(testPassword) || ( e.target.value.length < 6) ) {
      setUserPassword({...userPassword, value: '', pasError: true})
    } else {
      setUserPassword({...userPassword, value: e.target.value, pasError: false});
    } 
    if(!e.target.value) {
      setUserPassword({...userPassword, pasError: false});
    }
  };

  const onChangePassword = () => {
    setUserPassword({... userPassword, change: true});
  };

  const savePassword = () => {
    if(!userPassword.pasError && !userPassword.oldPasswordError && !userPassword.newPasswordError && oldPassword && userPassword.value) {
        dispatch(changePassword(userPassword.value));
        setUserPassword({... userPassword, change: false});
        const data = JSON.stringify({password: userPassword.value})
        changeUserData(data);
        setNewPassword('');
        setOldPassword('');

        setIsChangePassword(true);

        setTimeout(() => {
          setIsChangePassword(false)
        }, 4000)

      }
  };

  const cancelCahgePassword = () => {
    setNewPassword('');
    setOldPassword('');
    setUserPassword({...userPassword, value: '', change: false, pasError: false, oldPasswordError: false})
  };

  return (
      <div className={style.infoWrap}>
        <div className={style.infoItem}>
          <div className={style.inputWrap}>
          <span>Name:</span>
          {userName.change 
          ?  <input 
            className={userName.error ? style.error : ''}
            value={userName.value} 
            onChange={checkName}
          /> 
          :  <b>{firstName}</b>
          }
          {userName.error && <p>Invalid name</p>}
          </div>
          <div className={`${style.chengePassBtns} ${!userName.change ? style.visible : ''}`}>
                <button className="button" onClick={saveName} disabled={userName.error}>Save</button>
                <button className="button" onClick={cancelChangeName}>Cancel</button>
            </div>
          <button className={`button ${userName.change ? style.visible : ''}`} onClick={onChangeName}>Change name</button>
        </div>
        <div className={style.infoItem}>
          <div className={style.inputWrap}>
            <span>E-mail:</span>
            {userEmail.change 
            ? <input 
              className={(userEmail.error || userEmail.errorRegister) ? style.error : ''}
              value={userEmail.value} 
              onChange={checkEmail}
            /> 
            :  <b>{email}</b>
            }
            {userEmail.error && <p>Invalid email</p>}
            {userEmail.errorRegister && <p>This email is already registered</p>}
          </div>
          <div className={`${style.chengePassBtns} ${!userEmail.change ? style.visible : ''}`}>
                <button className="button" onClick={saveEmail} disabled={checkErrorEmail}>Save</button>
                <button className="button" onClick={cancelChangeEmail}>Cancel</button>
            </div>
          <button className={`button ${userEmail.change ? style.visible : ''}`} onClick={onChangeEmail}>Change email</button>
        </div>
        <div className={style.infoItem}>
          <p className={`${style.changedPassword} ${!isChangePassword ? style.visible : ''}`}>Your email was changed</p>
            <div className={`${style.wrapPassword} ${!userPassword.change ? style.visible : ''}`}>
              <div className={style.inputWrap} >
                <span>Old password:</span>
                <input 
                  className={userPassword.oldPasswordError ? style.error : ''}
                  value={oldPassword}
                  onChange={checkOldPassword}
                /> 
                {userPassword.oldPasswordError && <p>Incorect password</p>}
              </div>
              <div className={style.inputWrap} >
                <span>New password:</span>
                <input 
                  className={userPassword.pasError ? style.error : ''}
                  value={newPassword}
                  onChange={checkNewPassword}
                /> 
                {(userPassword.pasError && newPassword.length > 5 )&& <p>Invalid password</p>}
                {(newPassword.length > 0 && newPassword.length < 6) && <p>Min 6 simbols</p>}
              </div>
            </div>
            <div className={`${style.chengePassBtns} ${!userPassword.change ? style.visible : ''}`}>
                <button className="button" onClick={savePassword} disabled={checkErrorsPass}>Save</button>
                <button className="button" onClick={cancelCahgePassword}>Cancel</button>
            </div>
            <button className={`button ${userPassword.change ? style.visible : ''}`} onClick={onChangePassword}>Change password</button>
        </div>
        <button className={`${style.singOut} button`} type="button" onClick={singOut}>Sing Out</button>
      </div>
  )
}

export default PersonalData;
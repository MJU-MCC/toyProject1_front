import React, { useState } from "react";
import styles from './signup.module.css'


function Signup(){
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
   
    // 오류메세지 상태 저장
    const [idMessage, setIdMessage] = useState("");
    const [nameMessage, setNameMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");
   
    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isname, setIsName] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
   
    const onChangeId = (e) => {
      const currentId = e.target.value;
      setId(currentId);
      const idRegExp = /^[a-zA-z0-9]{4,12}$/;
   
      if (!idRegExp.test(currentId)) {
        setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
        setIsId(false);
      } else {
        setIdMessage("사용가능한 아이디 입니다.");
        setIsId(true);
      }
    };
   
    const onChangeName = (e) => {
      const currentName = e.target.value;
      setName(currentName);
   
      if (currentName.length < 2 || currentName.length > 5) {
        setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
        setIsName(false);
      } else {
        setNameMessage("사용가능한 닉네임 입니다.");
        setIsName(true);
      }
    };
   
    const onChangePassword = (e) => {
      const currentPassword = e.target.value;
      setPassword(currentPassword);
      const passwordRegExp =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      if (!passwordRegExp.test(currentPassword)) {
        setPasswordMessage(
          "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("안전한 비밀번호 입니다.");
        setIsPassword(true);
      }
    };
    const onChangePasswordConfirm = (e) => {
      const currentPasswordConfirm = e.target.value;
      setPasswordConfirm(currentPasswordConfirm);
      if (password !== currentPasswordConfirm) {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPasswordConfirm(false);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      }
    };
    const onChangeEmail = (e) => {
      const currentEmail = e.target.value;
      setEmail(currentEmail);
      const emailRegExp =
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
   
      if (!emailRegExp.test(currentEmail)) {
        setEmailMessage("이메일의 형식이 올바르지 않습니다!");
        setIsEmail(false);
      } else {
        setEmailMessage("사용 가능한 이메일 입니다.");
        setIsEmail(true);
      }
    };
    const onChangePhone = (getNumber) => {
      const currentPhone = getNumber;
      setPhone(currentPhone);
      const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
   
      if (!phoneRegExp.test(currentPhone)) {
        setPhoneMessage("올바른 형식이 아닙니다!");
        setIsPhone(false);
      } else {
        setPhoneMessage("사용 가능한 번호입니다.");
        setIsPhone(true);
      }
    };
   
    const addHyphen = (e) => {
      const currentNumber = e.target.value;
      setPhone(currentNumber);
      if (currentNumber.length == 3 || currentNumber.length == 8) {
        setPhone(currentNumber + "-");
        onChangePhone(currentNumber + "-");
      } else {
        onChangePhone(currentNumber);
      }
    };
   
    return (
      <div className={styles.signup}>
        <h3>Sign Up</h3>
        <br />
        <div className={styles.form}>
          <div className={styles.input}>
            <input id="id" name="id" value={id} onChange={onChangeId} placeholder="아이디"/>
            <p className="message"> {idMessage} </p>
          </div>
          <br />
          <div className={styles.input}>
            <input id="name" name="name" value={name} onChange={onChangeName} placeholder="닉네임"/>
            <p className="message">{nameMessage}</p>
          </div>
          <br />
          <div className={styles.input}>
            <input
            type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호"
            />
            <p className="message">{passwordMessage}</p>
          </div>
          <br />
          <div className={styles.input}>
            <input
            type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
              placeholder="비밀번호 확인"
            />
            <p className="message">{passwordConfirmMessage}</p>
          </div>
          <br />
          <div className={styles.input}>
            <input
              id="email"
              name="name"
              value={email}
              onChange={onChangeEmail}
              placeholder="이메일"
            />
            <p className="message">{emailMessage}</p>
          </div>
          <br />
          <div className={styles.input}>
            <input id="phone" name="phone" value={phone} onChange={addHyphen} placeholder="전화번호"/>
            <p className="message">{phoneMessage}</p>
          </div>
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </div>
    );
}
export default Signup
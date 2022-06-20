import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from "react";

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { BsExclamationDiamondFill } from "react-icons/bs";

import logoRiot from "../assets/logoRiot.svg";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  const [warningMessage, setWarningMessage] = useState(false);
  const [dataValidity, setDataValidity] = useState(false);
  const [inputClass, SetInputClass] = useState(styles.invalidUsername);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogin, setKeepLogin] = useState(false);

  useEffect(() => {
    warningMessage ? SetInputClass(styles.invalidUsername) : SetInputClass("");
    verifyDataValidity();
  });

  function verifyUsernameValidity(event: FocusEvent<HTMLInputElement>) {
    event.target.value.length === 1
      ? setWarningMessage(true)
      : setWarningMessage(false);
  }

  function verifyDataValidity() {
    username.length > 1 && password.length >= 1
      ? setDataValidity(true)
      : setDataValidity(false);
  }

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleKeepLoginChange(event: ChangeEvent<HTMLInputElement>) {
    setKeepLogin(!keepLogin);
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    console.log(event);
    setUsername("");
    setPassword("");
    setKeepLogin(false);
  }

  return (
    <aside>
      <img src={logoRiot} alt="Logo Riot Games" />

      <div className={styles.container}>
        <h1>Fazer login</h1>

        <form onSubmit={handleSubmitForm} className={styles.loginForm}>
          <div className={styles.loginHeader}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="NOME DE USUÁRIO"
                className={inputClass}
                value={username}
                onChange={handleUsernameChange}
                onBlur={verifyUsernameValidity}
                autoComplete="off"
              />
              {/* <label htmlFor="username"> NOME DE USUÁRIO </label> */}
            </div>

            {warningMessage && (
              <span className={styles.alertMessage}>
                <i>
                  <BsExclamationDiamondFill size={16} />
                </i>
                Deve ter Pelo menos 2 caracteres
              </span>
            )}

            <div className={styles.inputGroup}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="SENHA"
                value={password}
                onChange={handlePasswordChange}
              />
              {/* <label htmlFor="password"> SENHA </label> */}
            </div>

            <div className={styles.alternativeLoginButtons}>
              <button className={styles.facebookButton}>
                <FaFacebook size={20} color="white" />
              </button>

              <button className={styles.googleButton}>
                <FcGoogle size={20} />
              </button>

              <button className={styles.appleButton}>
                <FaApple size={20} color="white" />
              </button>
            </div>

            <div className={styles.keepLogin}>
              <input
                type="checkbox"
                name="keepLogin"
                id="keepLogin"
                checked={keepLogin}
                onChange={handleKeepLoginChange}
              />
              <label htmlFor="keepLogin"> Manter login </label>
            </div>
          </div>

          {dataValidity ? (
            <div className={styles.loginFooter}>
              <button type="submit" className={styles.submitButtonValid}>
                <FiArrowRight size={30} />
              </button>
            </div>
          ) : (
            <div className={styles.loginFooter}>
              <button
                type="submit"
                className={styles.submitButtonInvalid}
                disabled
              >
                <FiArrowRight size={30} />
              </button>
            </div>
          )}
        </form>

        <footer>
          <div className={styles.accountOptions}>
            <a href="#"> NÃO CONSEGUE INICIAR A SESSÃO? </a>
            <a href="#"> CRIAR CONTA </a>
          </div>

          <span> v52.0.1 </span>
        </footer>
      </div>
    </aside>
  );
}

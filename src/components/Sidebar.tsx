import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import logoRiot from "../assets/logoRiot.svg";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside>
      <img src={logoRiot} alt="Logo Riot Games" />

      <div className={styles.container}>
        <h1>Fazer login</h1>

        <form className={styles.loginForm}>
          <div className={styles.loginHeader}>
            <input
              type="text"
              name="username"
              placeholder="NOME DE USUÁRIO"
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="SENHA"
              autoComplete="off"
            />

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
              <input type="checkbox" name="keepLogin" />
              <label> Manter login </label>
            </div>
          </div>

          <div className={styles.loginFooter}>
            <button type="submit">
              <FiArrowRight size={30} />
            </button>
          </div>
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

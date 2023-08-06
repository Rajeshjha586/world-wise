import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logoImage from '../../public/logo.png';

function Logo() {
  return <Link to={"/"}><img src={logoImage} alt="WorldWise logo" className={styles.logo} /></Link>;
}

export default Logo;

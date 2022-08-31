
import Link from 'next/link';
import styles from '../styles/Home.module.css';


const Header = (props)=>{
  return(
    <header className={styles.header}>
      <Link
        href="/"
      >
        <a>Pokémon Search</a>
      </Link>
    </header>
  );
}
export default Header;
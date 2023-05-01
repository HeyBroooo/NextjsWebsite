import styles from  "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import logo from '../../../public/logo.png';

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
               <Link href="/" >
                   <Image src={logo} alt="my logo" width={50} height={50} />

               </Link>
            </div>
            <Nav/>
        </header>
    );
};

export default Header;
import Link from "next/Link"
import style from '../styles/menu.module.css'

export default function Menu() {
return(
    <nav className={style.menu}>
        <div>
            <Link className={style.link} href='/'>
                Home
            </Link>
            <Link className={style.link} href='/store'>
                Store
            </Link>
            <Link className={style.link} href='/faq'>
                FAQ
            </Link>
        </div>
        <div>
            <a className={style.link} href="#">Cart (0)</a>
        </div>
    </nav>
);
}
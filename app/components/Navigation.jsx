import Link from "next/link"
import  styles from './Navigation.module.css'

const links = [{
    label: 'Home',
    route: '/'
},{
    label: 'About',
    route: '/about'
},{
    label: 'Elchisi',
    route: '/elchisi'
},{
    label: 'Posts',
    route: '/posts'
},{
    label: 'Form',
    route: '/form'
}]

export function Navigation () {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navigation} >
                    {
                        links.map(({ label, route }) => (
                            <li key={ route }>
                                <Link className={styles.link}  href={ route }>
                                    { label }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
import styles from './Footer.module.css'

import logoFooter from '../../assets/logoFooter.png'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <ul className={styles.list}>
                    <li>a </li>
                    <li>b </li>
                    <li>c </li>
                    <li>d </li>
                </ul>
                <ul className={styles.list}>
                    <li>e </li>
                    <li>f </li>
                </ul>

            </div>
        </footer>

    )
}

export default Footer
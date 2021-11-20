import styles from './Header.module.css'

import logoPrincipal from '../../assets/logoPrincipal.png';
import lupa from '../../assets/lupa.png'
import usuario from '../../assets/usuario.png'
import Line from '../../assets/Line.png'
import carrinho from '../../assets/carrinho.png'
import brasil from '../../assets/brasil.png'
import espanha from '../../assets/espanha.png'
import gra from '../../assets/gra.png'
import { Nav } from 'react-bootstrap';

function Header(){
    return(
        <header class={styles.header}>
            <a class={styles.logo} href="#"><img src={logoPrincipal} width="auto" height="30px" ></img></a>
            <Nav class ={styles.navbar} >
                <ul class={styles.list}>
                    <div> <li class ={styles.item}> <a class= "" href=""><img src={lupa} width="auto" height="20px"></img></a> </li></div>
                    <div> <li class ={styles.item}> <a class= "" href=""><img src={usuario} width="auto" height="20px"></img></a> </li></div>
                    <div> <li class ={styles.item}> <a class= "" href="#"><img src={Line} ></img></a> </li></div>
                    <div> <li class ={styles.item}> <a class= "" href="#"><img src={carrinho} width="auto" height="20px"></img></a> </li></div>
                    <div> <li class ={styles.item}> <a class= "" href="#"><img src={brasil} width="auto" height="20px"></img></a> </li></div>
                    <div> <li class ={styles.item}> <a class= "" href="#"><img src={espanha} width="auto" height="20px"></img></a> </li></div>
                    <div> <li class ={styles.item}> <a class= "" href="#"><img src={gra} width="auto" height="20px"></img></a> </li></div>
                </ul>
            </Nav>
          
        </header>

    );
}

export default Header
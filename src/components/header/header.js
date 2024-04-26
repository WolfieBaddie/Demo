import './header.css';
import { Link } from 'react-router-dom';

function HeaderComponent(){
    return(
        <>
        <h1 classname="header">Thís ís Header</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </>
    );
}

export const title = "React JS" //co the co n

export default HeaderComponent; //duy nhat 1 cai
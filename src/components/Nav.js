import { Link } from "react-router-dom";
import Counter from './Counter'

const Nav = ({count}) => {
    return (
        <nav  className='nav navbar-dark bg-* nav-main' data-testid='nav'>
            <div className='container'>
                <Link to='/'>
                <h4 className='navbar-brand text-primary mt-2'>E-Shop</h4>
                </Link>
                <div className='nav-links'>
                <Link to='/about' className='text-dark'>About</Link>
                <Link to='/cart' className='ml-3 text-dark'>Cart </Link>
                <Counter count={count}/>
                </div>
            </div>
        </nav>
    )
}

export default Nav

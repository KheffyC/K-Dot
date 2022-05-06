import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ImCart } from 'react-icons/im'
import { FaShoppingBasket } from 'react-icons/fa'
import { IoShirt } from 'react-icons/io5'
import { CartContext } from '../context/CartContext'

const Header = () => {
  const { addToCart } = useContext(CartContext)
  return (
    <>
      <div className="Header">
          <nav className="Nav">
              <h1>K-Dot</h1>
            <ul className="navLinks">
                <li><NavLink to="/Products"><IoShirt/> Products</NavLink></li>
                <li><NavLink to="/Cart"><ImCart />   Cart ({addToCart.length})</NavLink></li>
                <li><NavLink to="/Checkout"><FaShoppingBasket /> Checkout</NavLink></li>
            </ul>
          </nav>
      </div>
      <div className='Footer'>
      </div>
    </>
  )
}

export default Header
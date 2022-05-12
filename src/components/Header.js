import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ImCart } from 'react-icons/im'
import { FaShoppingBasket } from 'react-icons/fa'
import { IoShirt, IoHome } from 'react-icons/io5'
import { CartContext } from '../context/CartContext'

const Header = () => {
  const { addToCart } = useContext(CartContext)
  return (
    <>
      <div className="Header">
          <nav className="Nav">
              <h1>K-Dot</h1>
            <ul className="navLinks">
                <li><NavLink to="/"><IoHome/> Home</NavLink></li>
                <li><NavLink to="/Products"><IoShirt/> Products</NavLink></li>
                <li>{(addToCart.length > 0) ? <NavLink to="/Cart"><ImCart />   Cart ({addToCart.length})</NavLink> : <ImCart />}</li>
                <li>{(addToCart.length > 0) ? <NavLink to="/Checkout"><FaShoppingBasket />   Checkout</NavLink> : <FaShoppingBasket />}</li>
            </ul>
          </nav>
      </div>
    </>
  )
}

export default Header
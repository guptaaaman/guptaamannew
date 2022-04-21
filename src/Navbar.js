import React, { useEffect, useState } from "react";
import restImage from './restaurant_24px (1).svg';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import CartIcon from './icons8-buying-30.png'
function Nav() {
    const obj = useSelector(store => store);
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        let total = 0;
        if (obj.cartItem) {
            obj.cartItem.forEach((item) => {
                total = total + item.qty
            })
            setCartCount(total)
        }

    }, [obj.cartItem, cartCount])

    const handleClick = () => {
        navigate('/cart')
    }
    return <div style={{ backgroundColor: '#070758', height: "80px", paddingTop: "10px", paddingLeft: "20px", marginBottom: "30px", paddingBottom: "10px" }}>

        <h1 style={{ color: 'white', textAlign: "left" }}>
            <img style={{ height: "30px" }} src={restImage} />  Food's Restaurant   <span style={{ color: 'white', float: "right" }} onClick={handleClick}>  <img src={CartIcon} style={{ height: "30px" }} onClick={handleClick} />   {cartCount}</span></h1>

    </div>

} export default Nav
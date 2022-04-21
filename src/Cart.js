import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {
    const obj = useSelector(store => store);
    const [product, setProduct] = useState([])
    useEffect(() => {
        setProduct(obj.cartItem);

    }, [obj.cartItem])
    const handleTotal = () => {
       
        let Total = 0;
    
   product &&     product.forEach((item) => {
            Total = Total + item.price * item.qty;
        })

        return Total;
    }

    return (
        <div>
            <table>
                {
                   product && product.map((item) => {
                        if (item.qty > 0)
                            return (
                                <tr>
                                    <td>
                                        {item.name} :{item.qty} :{item.price}</td>

                                </tr>

                            )
                    })
                }
                 <div>Total : {handleTotal()}</div>
            </table>
          <Link to='/checkout'> <button className="btn btn-primary">Logout</button></Link>
        </div>
    )




}
export default Cart
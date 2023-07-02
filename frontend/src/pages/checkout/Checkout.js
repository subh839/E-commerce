import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Input, Stack, Select, Image, Link } from "@chakra-ui/react"
import {RiShoppingCart2Line} from "react-icons/all"
import './checkout.css'
import { saveAddressshipping,savepaymentmethod } from '../../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
//import Payment from './Payment'
import axios from "axios";
import Button from 'react-bootstrap/Button';
const Checkout = ({history}) => {

    const [amount, setamount] = useState('');


    const cart = useSelector((state) => state.cart)

    const { shippingAddress } = cart



    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
      alert("please enter amount");
      }else{
        var options = {
          key: "rzp_test_2oqKN4FzBMORyR",
          key_secret:"acZ0VR4SgQHMTymC1Ab38x48",
          amount: amount *100,
          currency:"INR",
          name:"STARTUP_PROJECTS",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"Subhasish",
            email:"subh@gmail.com",
            contact:"1234567897"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }

    const dispatch = useDispatch()
    const [carddetails, setcarddetails] = useState(true)
    const handleorder = (e)=>{
        e.preventDefault()
         dispatch(saveAddressshipping({ address, city, postalCode, country}))
         history.push('/placeorder')

    }

   
    return (
        <div>
            <Helmet>
                <title>Checkout</title>
            </Helmet>

            <div className="limit-check">
                
                <div className="info-check">
                    <form onSubmit = {handleorder}>
                    <div className="billing-check">
                        <h1>Billing Address</h1>
                        {/* <label for="name" className="this-label">Full Name</label><br />
                        <Input variant="flushed" placeholder="Your name" required id="name"/><br />
                        <label for="email" className="this-label" >Email</label><br />
                        <Input variant="flushed" placeholder="Your mail" required id="email"/><br /> */}
                        <label for="address" className="this-label">Address</label><br />
                        <Input variant="flushed" placeholder="Your Address" required value ={address} id="address" onChange={(e) => setAddress(e.target.value)}/><br />
                        <label className="this-label">Country</label><br /> 
                        <Stack spacing={3}>
                            
                            <Select variant="flushed" onChange = {(e) => setCountry(e.target.value)} >
                                <option value="Maroc">India</option>
                                <option value="Algerie">Bangladesh</option>
                                <option value="France">France</option>
                                <option value="Espagne">USA</option>
                            </Select>
                            
                        </Stack>
                        <div className="city-cp-check">
                            <div><label for="city" className="this-label">City</label>
                            <Input variant="flushed" required placeholder="Your City" onChange = {(e) => setCity(e.target.value)} id="city"/></div>
                            <div><label for="zip" className="this-label" >Zip</label>
                            <Input variant="flushed" required placeholder="Your Zip" id="zip" onChange = {(e) => setPostalCode(e.target.value)}/></div>
                        </div>
                    </div>

                    <div className="payment-check">
                    <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <Button onClick={handleSubmit} variant="primary">Proceed to Pay</Button>
                    </div>
                    </form>
                    <div class="your-products">
                    {cart.cartItems.length === 0 ? <h1> <RiShoppingCart2Line size="29"/>Cart(0)</h1> : 
                    <>
                        <h1> <RiShoppingCart2Line size="29"/>Cart({cart.cartItems.length})</h1>
                        <div className="cart-summ">
                            {cart.cartItems.map((item,index)=>(
                            <p key = {index}>{item.qty} X <Link to={`/product/${item.product}`}>{item.name}</Link> <b> ₹{item.qty * item.price}</b></p>

                            ))}
                        </div>
                    </>
                    }
                    </div>

                </div>
                
                
                
            </div>

        </div>
    )
}

export default Checkout

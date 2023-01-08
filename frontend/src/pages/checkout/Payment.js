import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";

import { useDispatch } from "react-redux";
import Razorpay from 'razorpay';
import axios from "axios";
import Button from 'react-bootstrap/Button';




const Payment = () => {
	const [book, setBook] = useState({
		price: 500,
	});
    
	const initPayment = (data) => {
		const options = {
			key: "rzp_test_2oqKN4FzBMORyR",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "https://jober-2dkh.onrender.com/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "https://jober-2dkh.onrender.com/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: book.price });
		//	console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <>
     <Navbar />
      <br />
      <br />
   
      <br />
      <div className="book_container" style={{"textAlign":"center","height":"50px","width":"500px","marginTop":"200px","marginLeft":"550px"}}>
      <h2>Pay @250 To Register</h2>
              <br/><br/>  <Button style={{"textAlign":"center","height":"50px","width":"150px"}} onClick={handlePayment} variant="primary">Proceed To Pay</Button>{' '}
			</div>
    </>
  );
};

export default Payment;

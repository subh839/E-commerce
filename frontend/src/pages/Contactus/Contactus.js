import React, { useState } from 'react'
import { Image } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import { Input,InputGroup, InputLeftElement, Textarea,Button  } from "@chakra-ui/react"
import {BsEnvelope, GiPositionMarker, HiOutlinePhone} from 'react-icons/all'
import './contactuscss.css'
const Contactus = () => {
    const [email, setemail] = useState('')
    const [body, setbody] = useState('')

    const handlesubmit = () =>{
        window.open(`mailto:subhasishhalder107@gmail.com?subject=Sample&body=${body}`)
    }
    return (

        <div className="contactUs">
            <Helmet>
                <title>Contact</title>
            </Helmet>
        <div className="headerContact">
            <Image className="imageContact" src='https://images.indianexpress.com/2018/01/men-fashion-759-filephoto.jpg' alt="contactImage" objectFit=""/>
            <div className="text">
                <h2>Contact</h2>  
            </div>
              
        </div>

        <div className="card-contact">
            <div className="sendMsg">
                <h4>Send Us A Message</h4>
                    <div className="inputContact">
                        <InputGroup width="450px" >
                            <InputLeftElement       pointerEvents="none"  children={<BsEnvelope className = 'envolope' color="gray.300" />}/>
                            <Input value = {email} onChange = {e=> setemail(e.target.value)} type="text" placeholder="Your Email Address"/>
                        </InputGroup>
                        
                    </div>
                    <div className="textAreaCnt">
                        <Textarea value = {body} onChange = {e=> setbody(e.target.value)} width="450px"  placeholder="How Can We Help" height="200px" />
                    </div>
                    <div className="contentContact">
                        <Button onClick = {handlesubmit} borderRadius="90px" colorScheme="teal" variant="solid" size="180px" className="contactBtn">Submit</Button>
                    </div>

            </div>
            <div className="showAdrss">
                <div className="box">
                    <div className="iconCtn"><GiPositionMarker opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3> Address</h3>
                        <p>West Bengal,India</p>
                    </div>
                </div>
                    <div className="box">
                    <div className="iconCtn"><HiOutlinePhone opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Lets Talk</h3>
                        <p className="infoCtn">+91-8981349471</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconCtn"><BsEnvelope opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Sale Support</h3>
                        <p className="infoCtn">Store@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}

export default Contactus

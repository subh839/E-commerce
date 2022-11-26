import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <p>Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                   Id laborum nostrud aute id et voluptate. Deserunt nisi ex et elit officia ex ea. Consectetur magna aliqua mollit ea velit anim eiusmod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                   Est exercitation laboris Lorem sint Lorem id aute excepteur sint cupidatat. Et enim minim aliqua cillum sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.
                   Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                   Id laborum nostrud aute id et voluptate. Deserunt nisi ex et elit officia ex ea. Consectetur magna aliqua mollit ea velit anim eiusmod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                   Est exercitation laboris Lorem sint Lorem id aute excepteur sint cupidatat. Et enim minim aliqua cillum sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://thumbs.dreamstime.com/b/fashion-clothes-short-sleeve-shirt-jeans-mens-photos-made-white-background-148910225.jpg' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                   Id laborum nostrud aute id et voluptate. Deserunt nisi ex et elit officia ex ea. Consectetur magna aliqua mollit ea velit anim eiusmod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                   Est exercitation laboris Lorem sint Lorem id aute excepteur sint cupidatat. Et enim minim aliqua cillum sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.
                   Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                   Id laborum nostrud aute id et voluptate. Deserunt nisi ex et elit officia ex ea. Consectetur magna aliqua mollit ea velit anim eiusmod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                   Est exercitation laboris Lorem sint Lorem id aute excepteur sint cupidatat. Et enim minim aliqua cillum sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.</p>
                </div>
            </div>
        </>
    
    )
}

export default About

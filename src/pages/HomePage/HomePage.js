'use client'
import Image from 'next/image'
import './HomePage.scss'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import NavBar from '@/Component/NavBar/NavBar';
import NavBarMobil from '@/Component/NavBarMobile/NavBarMobil';
import { useState } from 'react';


const HomePage = ({ setstate, scrollToSection, VAbout, VResume,
    state, VProject, VBlog, VContact}) => {

    //to move slidebar
    const [bar, setBar] = useState("noapeare")
    return (
        <div className='AllHome' >
            <NavBar setstate={setstate} state={state} />

            <NavBarMobil
                VAbout={VAbout} VResume={VResume}
                VProject={VProject} VBlog={VBlog}
                VContact={VContact} state={state}
                scrollToSection={scrollToSection} 
                bar={bar} setBar={setBar}/>

            <div className='home'>
                
                <div className='menuMobile' onClick={()=>{setBar("apeare")}}>
                    <div className='m-one'></div>
                    <div className='m-two'></div>
                    <div className="m-three" ></div>
                </div>
                <Image src="/avatar1-1.jpg" alt='' width={250} height={250} className='avatar1' />
                <div className='inform-ryan'>
                    <h1 >Olivia Ryan</h1>
                    <h6>
                        <TypeAnimation
                            sequence={[
                                'Content Maneger',
                                1500,

                                'Marketing Manager',
                                1500,

                                'SEO Specialest',
                                1500,
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h6>
                    <div className='social'>
                        <FaLinkedinIn className='icon' />
                        <BsTwitterX className='icon' />
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className='Footer-home'>
                    <div>download cv</div>
                    <div>contact me</div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

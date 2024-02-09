'use client'
import React from 'react';
import "./NavBar.scss"
import { TypeAnimation } from 'react-type-animation';
import { FaList, FaNewspaper, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

import Link from 'next/link';
import DarkMode from "../darkMode/DarkMode";

const NavBar = ({setstate ,state}) => {
    return (
        <div className='Bar'>
            <div className='sideBar-above'>
                <div className='menu-mode'>
                    <Link href="/products" className='menubar'>
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className="three" ></div>
                    </Link>
                    <DarkMode />
                </div>

                <div className='Bar-ryan'>
                    <h1 >Olivia Ryan</h1>
                    <h6>
                        <TypeAnimation
                            sequence={[
                                'Content Maneger',
                                1500,

                                'Marketing Manager',
                                1500,

                                'SEO Specialestnp',
                                1500,
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h6>
                </div>
            </div>

            <div className='sideBar-down'>
                <ul>
                    <li onClick={()=>setstate(1)}><Link href="" className={`${state=== 1? "active" : "noActive"}`}>
                        <FaRegUser className='nav-icon' />
                        about
                    </Link></li>
                    <li onClick={()=>setstate(2)} ><Link href=""  className={`${state===2?"active":"noActive" }`} >
                        <FaList className='nav-icon' />
                        resume
                    </Link></li>
                    <li onClick={()=>setstate(3)} ><Link href="" className={`${state===3?"active":"noActive" }`} >
                        <FaRegFolderOpen className='nav-icon' />
                        projects
                    </Link></li>
                    <li onClick={()=>setstate(4)} ><Link href="" className={`${state===4?"active":"noActive" }`} >
                        <FaNewspaper className='nav-icon' />
                        blog
                    </Link></li>
                    <li onClick={()=>setstate(5)} ><Link href="" className={`${state===5?"active":"noActive" }`} >
                        <BsEnvelope className='nav-icon' />
                        contact
                    </Link></li>
                    
                </ul>
            </div>
        </div>
    );
}

export default NavBar;

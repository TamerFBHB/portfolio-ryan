import "./NavBarMobile.scss"
import { TypeAnimation } from 'react-type-animation';
import { FaList, FaNewspaper, FaOpencart, FaRegFolderOpen, FaRegUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

import { MdOutlineClose } from "react-icons/md";
import DarkMode from "../darkMode/DarkMode";
import Link from "next/link";



const NavBarMobil = ({ scrollToSection, VAbout, VResume, VProject, VBlog, VContact ,bar , setBar}) => {
    return (
        <div className={`Bar-mobile ${bar==="apeare"? "apeare" : "noapeare"}`}>
            <div className='sideBar-above'>
                <div className='menu-mode'>
                    <div className='menubar' onClick={()=>{setBar("noapeare")}} >
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className="three" ></div>
                        <MdOutlineClose   className="icon-close" />
                    </div>
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
                    <li><a onClick={() => { scrollToSection(VAbout);setBar("noapeare") }}>
                        <FaRegUser className='nav-icon' />
                        about
                    </a></li>
                    <li><a onClick={() => { scrollToSection(VResume);setBar("noapeare") }}
                    >
                        <FaList className='nav-icon' />
                        resume
                    </a></li>
                    <li><a onClick={() => { scrollToSection(VProject);setBar("noapeare") }}
                    >
                        <FaRegFolderOpen className='nav-icon' />
                        projects
                    </a></li>
                    <li><a onClick={() => { scrollToSection(VBlog);setBar("noapeare") }}
                    >
                        <FaNewspaper className='nav-icon' />
                        blog
                    </a></li>
                    <li><a onClick={() => { scrollToSection(VContact);setBar("noapeare") }}
                    >
                        <BsEnvelope className='nav-icon' />
                        contact
                    </a></li>
                    
                </ul>
            </div>
        </div>
    );
}

export default NavBarMobil;

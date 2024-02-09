'use client'
import React, {  useRef, useState } from 'react';
import "./ShowPage.scss"
import About from "../About/About";
import Resume from '../Resume/Resume';
import Project from '../Project/Project';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Image from 'next/image';
import HomePage from '../HomePage/HomePage';



const ShowPage = () => {
    // to move between pages in large screen
    const [state, setstate] = useState(1);

    // to move between pages in medium & small screen

    const VAbout = useRef();
    const VResume = useRef();
    const VProject = useRef();
    const VBlog = useRef();
    const VContact = useRef();


    //to call page in mobile screen
    const scrollToSection = (Ref) => {
        var media = window.matchMedia("(max-width: 650px)")
        if (media.matches) {
            window.scrollTo({
                top: Ref.current.offsetTop - (-720),
                behavior: "smooth", block: 'start',
            })
        } else {
            window.scrollTo({
                top: Ref.current.offsetTop - (-920),
                behavior: "smooth", block: 'start',
            })
        }
    }


    const [apeare, setapeare] = useState(false)
    return (
        <div className='showPage'>

            {/* certificates of page resume */}
            <div className={`bg-certificate ${apeare ? "show" : "hide"}`} onClick={() => { setapeare(false) }}>
                <div className='barclose' onClick={() => { setapeare(false) }}>
                    <div className='sert-one'></div>
                    <div className='sert-two'></div>
                </div>

                <Image src="/certificate1.jpeg" alt='' width={450} height={350} className='certificate-image' />

            </div>
            {/* certificates of page resume */}

            <div className='homePage'>
                <HomePage
                    scrollToSection={scrollToSection}
                    VAbout={VAbout} VResume={VResume}
                    VProject={VProject} VBlog={VBlog}
                    VContact={VContact}
                    setstate={setstate} state={state} />
            </div>

            <div className='informPage'>
                <About state={state} VAbout={VAbout} />

                <Resume state={state} VResume={VResume} setapeare={setapeare} />

                <Project state={state} VProject={VProject} />

                <Blog state={state} VBlog={VBlog} />

                <Contact state={state} VContact={VContact} />

            </div>
        </div>
    );
}

export default ShowPage;

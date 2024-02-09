'use client'
import Image from "next/image";
import "./Project.scss";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";

import axios from 'axios';



export default function Project({ state, VProject }) {


    //fetch data from myjson.online
    const [post, setPost] = useState([])  // to give data to post and use it
    const [error, setError] = useState(null)  // to apeare message error

    async function getAllPosts() {
        try {
            const { data } = await axios.get("https://api.npoint.io/82aa94e9ef44e2c52f98");
            setPost(data)
            setArr(data)
        } catch (error) {
            setError(error.message) // to apeare message error
        }
    }
    useEffect(() => {
        getAllPosts();
    }, []);

    // to apeare data with filter

    const [arr, setArr] = useState(post)

    const handleClick = (myItem) => {
        const newData = post.filter((item) => {
            return item.categoy === myItem;
        })
        setArr(newData)
    }



    return (
        <div ref={VProject} className={`ProjectPage ${state === 3 ? "open" : "close"}`}>
            <div className='my-work'>
                <div className="title-work">
                    <h3><span>w</span>orks</h3>
                    <ul>
                        <li onClick={() => { setArr(post) }}>All</li>
                        <li onClick={() => { handleClick("video") }}>video</li>
                        <li onClick={() => { handleClick("link") }}>link</li>
                        <li onClick={() => { handleClick("Image") }}>Image</li>
                        <li onClick={() => { handleClick("gallery") }}>gallery</li>
                        <li onClick={() => { handleClick("content") }}>content</li>
                    </ul>
                </div>

                <div className="section-work ">
                    <AnimatePresence>
                        {arr.map((item) => {
                            return (
                                <motion.div className="box-img "
                                    layout
                                    initial={{ transform: "scale(0.4)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                        
                                    key="categoy">
                                    <div className="img">
                                        <Image src={item.image} alt="" width={item.width} height={item.height} className="foto" loading="lazy"/>
                                    </div>
                                    <p>{item.title}</p>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
}



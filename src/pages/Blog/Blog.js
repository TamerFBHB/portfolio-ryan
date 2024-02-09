'use client'
import "./Blog.scss";
// import dataBlog from "../../../Blog.json";
import Image from "next/image";
import {   useEffect,useState } from "react";
import {AnimatePresence, motion } from "framer-motion"
import axios from 'axios';


const Blog = ({ state, VBlog }) => {

    //fetch data from myjson.online
    const [post, setPost] = useState([])  // to give data to post and use it
    const [error, setError] = useState(null)  // to apeare message error

    async function getAllPosts() {
        try {
            const { data} = await axios.get("https://api.npoint.io/ab4f767e057e78f167ac");
            //            
            setPost(data)
            setArrBlog(data)
        } catch (error) {
            setError(error.message) // to apeare message error
        }
    }
    useEffect(() => {
        getAllPosts();
    }, []);

    // to apeare data with filter
    const [arrBlog, setArrBlog] = useState(post)
    const handleBlog = (ItemBlog) => {
        const newDataBlog = post.filter((e) => {
            return e.type === ItemBlog;
        })
        setArrBlog(newDataBlog)
    }

    return (
        <div ref={VBlog} className={`blog ${state === 4 ? "open" : "close"}`}>
            <div className="header">
                <h3><span>B</span>log</h3>
                <ul>
                    <li onClick={() => { setArrBlog(post) }}>all</li>
                    <li onClick={() => { handleBlog("music") }}>music</li>
                    <li onClick={() => { handleBlog("design") }}>design</li>
                    <li onClick={() => { handleBlog("code") }}>code</li>
                </ul>
            </div>
            <div className="my-card">
                <div className="cards-blog">
                    <AnimatePresence>
                        {arrBlog.map((items) => {
                            return (
                                <motion.div className="card-blog"
                                    layout
                                    initial={{ transform: "scale(0.4)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                                    key="type">
                                    <Image src={items.image} alt="" width={250} height={170} loading="lazy"/>
                                    <div className="body-card-blog">
                                        <p className="date-blog">{items.date}</p>
                                        <h4>{items.title}</h4>
                                        <p>{items.details}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
}

export default Blog;

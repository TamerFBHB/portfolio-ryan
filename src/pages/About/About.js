
import  "./About.scss"
import { FaRegBuilding, FaChartLine, FaRegChartBar, FaChartPie, FaRocket, FaTrophy, FaFlag } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidAlbum } from "react-icons/bi";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { GiCoffeeCup } from "react-icons/gi";
import Image from "next/image";

const About = ({ state, VAbout }) => {

    return (
        <div ref={VAbout} className={`about ${state === 1 ? "open" : "close"}`}>

            <div className='about-me'>
                <h3><span>A</span>bout Me</h3>
                <div className='about-information'>
                    <div className='hello'>
                        <h4>Hello! Iam Olivia Ryan.</h4>
                        <p>Marketing Manager & SEO Specialist from USA, California. I have rich experience in advertising, user experience, social media trends, market research, and data analytics.</p>
                    </div>

                    <ul >
                        <li >
                            <h5 >Age:</h5>
                            <h5 >24</h5>
                        </li>
                        <li>
                            <h5>Residence:</h5>
                            <h5>USA</h5>
                        </li>
                        <li>
                            <h5>Freelance:</h5>
                            <h5>Available</h5>
                        </li>
                        <li>
                            <h5>Address:</h5>
                            <h5>California, USA</h5>
                        </li>
                    </ul>

                </div>
            </div>

            <div className='services'>
                <h3><span>M</span>y Services</h3>
                <div className='my-service'>
                    <div className='row'>
                        <div className='box'>
                            <div className='bg-icon'>
                                <FaChartLine className='icon' />
                            </div>
                            <h4>Implementing Strategy</h4>
                            <p>You help implement this strategy via prioritized activities on the marketing roadmap.</p>
                        </div>
                        <div className='box'>
                            <div className='bg-icon'>
                                <FaRegBuilding className='icon' />
                            </div>
                            <h4>Creating Campaigns</h4>
                            <p>Marketing managers own the process of building marketing programs and campaigns.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='box'>
                            <div className='bg-icon'>
                                <FaChartPie className='icon' />
                            </div>
                            <h4>Supporting Sales</h4>
                            <p>Marketing managers often support the sales process along the buyer is journey more effectively.</p>
                        </div>
                        <div className='box'>
                            <div className='bg-icon'>
                                <FaRegChartBar className='icon' />
                            </div>
                            <h4>Analyzing Marketing Data</h4>
                            <p>Marketing managers track, analyze, and report on the impact of all activities and share industry trends.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='price'>
                <h3><span>P</span>ricing</h3>
                <div className='cards'>
                    <div className='card-price'>
                        <div className='bg-icon'>
                            <FaRocket className='icon' />
                        </div>
                        <h4>Popular</h4>
                        <h1><span>$</span>39<span>hour </span></h1>
                        <p>Implementing strategy</p>
                        <p>Creating campaigns</p>
                        <p>Overseeing content</p>
                        <p>Planning events <span>not include</span></p>
                        <p>Supporting sales <span>not include</span></p>

                        <div className='order'>
                            order now
                            <IoIosArrowForward className='icon-order' />
                        </div>
                    </div>
                    <div className='card-price'>
                        <div className='bg-icon'>
                            <FaChartLine className='icon' />
                        </div>
                        <h4>Premium</h4>
                        <h1><span>$</span>59<span>hour </span></h1>
                        <p>Implementing strategy</p>
                        <p>Creating campaigns</p>
                        <p>Overseeing content</p>
                        <p>Planning events <span>not include</span></p>
                        <p>Supporting sales <span>not include</span></p>

                        <div className='order'>
                            order now
                            <IoIosArrowForward className='icon-order' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='fact'>
                <h3><span>F</span>un Facts</h3>
                <div className='fun-fact'>
                    <div className='box-fact'>
                        <div className='bg-icon'>
                            <BiSolidAlbum className='icon' />
                        </div>
                        <p>80+ Albumes</p>
                        <p>Listened</p>
                    </div>

                    <div className='box-fact'>
                        <div className='bg-icon'>
                            <FaTrophy className='icon' />
                        </div>
                        <p>15 Awards Won</p>
                    </div>

                    <div className='box-fact'>
                        <div className='bg-icon'>
                            <GiCoffeeCup className='icon' />
                        </div>
                        <p>1 000+ Cup of</p>
                        <p>Coffee</p>
                    </div>

                    <div className='box-fact'>
                        <div className='bg-icon'>
                            <FaFlag className='icon' />
                        </div>
                        <p>10+ Counters</p>
                        <p>Visited</p>
                    </div>
                </div>
            </div>

            <div className='Quote'>
                <h3><span>Q</span>uote</h3>
                <div className='quote-Ryan'>
                    <div>
                        <RiDoubleQuotesL className='icon-quote' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rem omnis voluptatibus rerum, nemo corporis! Iure blanditiis minus reiciendis ipsa, laborum eligendi sed facilis ut pariatur tempora accusantium deleniti beatae?</p>
                        <RiDoubleQuotesR className='icon-quote' />
                    </div>
                    <div className='foto-Rayan'>
                        <Image src="/rayan-foto.jpg" alt='' width={80} height={80}/>
                        <h4>Ryan Adlard</h4>
                        <p>Web Designer</p>
                    </div>
                </div>
            </div>

            <div className='client'>
                <h3><span>C</span>lient</h3>
                <div className='client-card'>
                    <div className='box-client'>
                        <Image src="/upwork.png" width={30} height={20} alt='upwork' />
                    </div>
                    <div className='box-client'>
                        <Image src="/google.png" width={30} height={20} alt='google' />
                    </div>
                    <div className='box-client'>
                        <Image src="/envato.svg" width={30} height={20} alt='envato' />
                    </div>
                    <div className='box-client'>
                        <Image src="/freelancer.png" width={30} height={20} alt='freelancer' />
                    </div>
                </div>
            </div>

            <div className='SEO'>
                <h3><span>S</span>EO Text</h3>
                <div className='text-SEO'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nobis reiciendis maiores, dolorem quasi laboriosam tempora, impedit aut ipsa adipisci, ullam modi cupiditate voluptatem dignissimos consequuntur sequi temporibus eius facere?</p>
                </div>
            </div>
        </div>
    );
}

export default About;

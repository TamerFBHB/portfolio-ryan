
import "./Resume.scss";
import { PiBankDuotone } from "react-icons/pi";
import { FaBriefcase, FaCheck, FaFlag } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';
import { HiSpeakerphone } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Resume = ({ state, VResume, setapeare }) => {

    return (
        <div ref={VResume} className={`resumes ${state === 2 ? "open" : "close"} `}>
            <div className='my-resume'>
                <h3><span>R</span>esume</h3>
                <div className='CV'>
                    <div className='section '>
                        <div className="title ">
                            <div className='bg-icon'>
                                <FaBriefcase className='icon' />
                            </div>
                            <h3>experience</h3>
                        </div>
                        <div className='body-section'>
                            <div className='date1'>
                                <p>2013 - Present</p>
                            </div>
                            <div className='tradeMark'>
                                <h2><span>ceo</span> director</h2>
                                <Image src="/envato.svg" width={30} height={20} alt='' />
                            </div>
                            <p className='inc'>Envato inc.</p>
                            <p>Collaborate with creative and development teams on the execution of ideas.</p>
                        </div>

                        <div className='body-section'>
                            <div className='date1'>
                                <p>2011 -2012</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>Marketing Manager</h4>
                                <Image src="/upwork.png" width={30} height={20}  alt='' />
                            </div>
                            <p className='inc'>Upwork Inc.</p>
                            <p>Monitored technical aspects of the marketing data for projects.</p>
                        </div>

                        <div className='body-section'>
                            <div className='date1'>
                                <p>2009-2010</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 >Marketing Manager</h4>
                                <Image src="/freelancer.png" width={30} height={20}  alt='' />
                            </div>
                            <p className='inc'>Freelancer Inc.</p>
                            <p>Optimize your website and apps performance using latest technology.</p>
                        </div>

                    </div>
                    <div className='section'>
                        <div className="title">
                            <div className='bg-icon'>
                                <PiBankDuotone className='icon' />
                            </div>
                            <h3>education</h3>
                        </div>

                        <div className='body-section'>
                            <div className='date1'>
                                <p>2006-2008</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>University of Florida</h4>
                            </div>
                            <p className='inc'>Gainesville</p>
                            <p>The University of Florida is a public land-grant research university in Gainesville.</p>
                            <a className="certificate " onClick={() => { setapeare(true) }}>
                                CERTIFICATE
                                <IoIosArrowForward className='icon-certificate' />
                            </a>
                        </div>

                        <div className='body-section'>
                            <div className='date1'>
                                <p>2006-2008</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>SEO Courses</h4>
                            </div>
                            <p className='inc'>New York</p>
                            <p>Certification course, all things SEO, including website optimization.</p>
                            <a className="certificate " onClick={() => { setapeare(true) }}>
                                CERTIFICATE
                                <IoIosArrowForward className='icon-certificate ' />
                            </a>
                        </div>


                        <div className='body-section'>
                            <div className='date1'>
                                <p>2005-2006</p>
                            </div>
                            <div className='tradeMark'>
                                <h4 className=''>Marketing Courses</h4>
                            </div>
                            <p className='inc'>London</p>
                            <p>Improving website to increase visibility on search engines such Google, Bing.</p>
                            <a className="certificate " onClick={() => { setapeare(true) }}>
                                CERTIFICATE
                                <IoIosArrowForward className='icon-certificate' />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="skill">
                    <h3><span>S</span>kills</h3>
                    <div className="part">
                        <div className="section">
                            <div className="title ">
                                <div className='letter-G'>
                                    <div className="">ᴳ</div>
                                </div>
                                <h3>seo</h3>
                            </div>

                            <div className="evaluation">
                                <h2>search engines</h2>
                                <div class="bg-prog">
                                    <div class="bg-value search" ></div>
                                </div>
                            </div>

                            <div className="evaluation">
                                <h2>Writing</h2>
                                <div class="bg-prog">
                                    <div class="bg-value Writing" ></div>
                                </div>
                            </div>

                            <div className="evaluation">
                                <h2>Project Management</h2>
                                <div class="bg-prog">
                                    <div class="bg-value Management" ></div>
                                </div>
                            </div>

                            <div className="evaluation">
                                <h2>Data Analysis</h2>
                                <div class="bg-prog">
                                    <div class="bg-value Data" ></div>
                                </div>
                            </div>

                        </div>
                        <div className="section">
                            <div className="title ">
                                <div className='bg-icon '>
                                    <FaFlag className='icon' />
                                </div>
                                <h3>LANGUAGES</h3>
                            </div>
                            <div className="evaluation">
                                <h2>english</h2>
                                <div class=" bg-circle" >
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle not" ></div>
                                </div>
                            </div>

                            <div className="evaluation">
                                <h2>German</h2>
                                <div class=" bg-circle" >
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                </div>
                            </div>

                            <div className="evaluation">
                                <h2>Italian</h2>
                                <div class=" bg-circle" >
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                </div>
                            </div>

                            <div className="evaluation">
                                <h2>French</h2>
                                <div class=" bg-circle" >
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                    <div class="prog-circle not" ></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="part">
                        <div className="section">
                            <div className="title ">
                                <div className='bg-icon '>
                                    <HiSpeakerphone className='icon' />
                                </div>
                                <h3>MARKETING</h3>
                            </div>
                            <div className="progress">
                                <div className="par">
                                    <div className="progress-bar-social">75%</div>
                                    <p className="detail-par">Social Media</p>
                                </div>
                                <div className="par">
                                    <div className="progress-bar-google">90%</div>
                                    <p className="detail-par">Google Ads</p>
                                </div>
                                <div className="par">
                                    <div className="progress-bar-Collaboration">85%</div>
                                    <p className="detail-par">Collaboration</p>
                                </div>
                                <div className="par">
                                    <div className="progress-bar-Budgeting">95%</div>
                                    <p className="detail-par">Budgeting</p>
                                </div>
                            </div>
                        </div>

                        <div className="section">
                            <div className="title ">
                                <div className='bg-icon '>
                                    <TfiMenuAlt className='icon' />
                                </div>
                                <h3>KNOWLEDGE</h3>
                            </div>
                            
                                <ul>
                                    <li>
                                        <FaCheck className="ico" />
                                        <p>Technology expertise</p>
                                    </li>
                                    <li>
                                        <FaCheck className="ico" />
                                        <p>Data analysis</p>
                                    </li>
                                    <li>
                                        <FaCheck className="ico" />
                                        <p>Project management</p>
                                    </li>
                                    <li>
                                        <FaCheck className="ico" />
                                        <p>Organization</p>
                                    </li>
                                    <li>
                                        <FaCheck className="ico" />
                                        <p>Instagram Promoting</p>
                                    </li>
                                    <li>
                                        <FaCheck className="ico" />
                                        <p>Advertising services include</p>
                                    </li>
                                    <li>
                                        <FaCheck className="ico" />
                                        <p>Planning</p>
                                    </li>
                                    <li>
                                        <FaCheck className="ico" />
                                        <p>Search engine marketing</p>
                                    </li>
                                </ul>
                            

                        </div>

                    </div>
                </div>

                <div className="Testimonials">
                    <h3><span>T</span>estimonials</h3>

                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                            Mousewheel: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide >
                            <div className="rayan-text ">
                                <RiDoubleQuotesL className="quote" />
                                <p className=" ">Lorem ipsum tamro sit , constaknbhsl oejnlso nhu lsksos. lofrwkl loreh ldodhnml dkdcdnl prrrm </p>
                                <RiDoubleQuotesR className="quote-end" />
                            </div>
                            <Image src="/rayan-foto.jpg"  width={80} height={80} alt="" className="rayan-foto"/>
                            <h4 className="">Robert chace</h4>
                            <h5>CEO</h5>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div className="rayan-text ">
                                <RiDoubleQuotesL className="quote" />
                                <p className=" ">Lorem ipsum tamro sit , constaknbhsl oejnlso nhu lsksos. lofrwkl loreh ldodhnml dkdcdnl prrrm </p>
                                <RiDoubleQuotesR className="quote-end" />
                            </div>
                            <Image src="/testi1.jpg" alt="" className="rayan-foto" width={80} height={80} />
                            <h4 className="">Helen folid</h4>
                            <h5>art director</h5>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="rayan-text ">
                                <RiDoubleQuotesL className="quote" />
                                <p className=" ">Lorem ipsum tamro sit , constaknbhsl oejnlso nhu lsksos. lofrwkl loreh ldodhnml dkdcdnl prrrm </p>
                                <RiDoubleQuotesR className="quote-end" />
                            </div>
                            <Image src="/avatar2-184x184.png" alt="" className="rayan-foto" width={80} height={80} />
                            <h4 className="">Robert chace</h4>
                            <h5>art director</h5>
                        </SwiperSlide>
                    </Swiper>

                </div>

            </div>

        </div>
    );
}

export default Resume;

import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Aaron Sim (Internet Name) | Coding | web2 + web3 | React App | Full Stack |
                Software Engineering'
            />
            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Coding</h3>
                    <p className='about-details'>
                        Coding is my passion. Till now, I've deployed many
                        Web Apps mostly React. Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/aaronsiim'
                            target="_blank"
                        >
                            all the open-source projects!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Engineering</h3>
                    <p className='about-details'>
                        I've been a software engineer since 2019 and looking forward to giving
                        continuity to the same pathway. Check  out{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/aaronsiim'
                            target="_blank"
                        >
                            my Github Profile!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>web3 + Innovation</h3>
                    <p className='about-details'>
                        I've been working on few web3 projects like
                        DeveloperDAO, including EtherSiim, which was built
                        from scratch. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://twitter.com/EtherSiim'
                            target="_blank"
                        >
                            the Free web3 eBooks that I wrote!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Get to know me!</h3>
                    <p className='about-details'>
                        Being a passionate software engineering, I've been open to
                        talk about the ongoing innovations and be a part
                        of it. Wanna get connected?{' '}
                        <a
                            className='about-link-element'
                            href='https://twitter.com/AaronSiim'
                            target="_blank"
                        >
                            Message me on Twitter!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img className='about-anime' src={aboutAnime} alt='about' />
                </div>
            </div>
            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAddress='/projects'
            />
            <div className='vector-frame'>
                <img className='about-vector' src={aboutVector} alt='' />
            </div>
        </div>
    );
};

export default About;

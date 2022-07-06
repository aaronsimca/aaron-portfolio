import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

import poster from './../../assets/poster.png';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={props.closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>I'm thrilled, you're here!</h1>
                    <p onClick={props.closeModal} className='close'>
                        &times;
                    </p>
                </div>

                <div className='middle-section-container'>
                    <div className='middle-section'>
                        <h3>Web3 eBooks are out!</h3>
                        <p>Do you wish to know more about the EtherSiim project?</p>
                        <p>
                            I've published an completely FREE web3 eBooks on Twitter,
                            check it out today!
                        </p>
                        <p>Here are the lists:</p>
                        <li>2022 WEB3/CRYPTO TOOLKIT</li>
                        <li>WEB3/CRYPTO TECHNICAL TOOLKIT</li>
                        <li>WEB3 PROJECTS</li>

                    </div>
                    <div className='middle-section-image'>
                        <a
                            href='https://twitter.com/AaronSiim'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={poster}
                                alt='poster'
                                className='aam-cover'
                            />
                        </a>
                    </div>
                </div>

                <div className='lower-section'>
                    <a onClick={props.closeModal} className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href='https://twitter.com/EtherSiim'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        ACCESS FREE eBOOK
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;

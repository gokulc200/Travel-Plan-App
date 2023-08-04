import React from 'react';
import Navbar from './Navbar';

import "./Discover.css";

const Discover = () => {
    return (
        <>
            <Navbar />
            <div className='discover-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='text-center text-white pt-3'>"Embark on an unforgettable adventure filled with breathtaking landscapes, rich cultural experiences, and unforgettable memories on our immersive travel expedition."</h3>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow discover-card text-black'>
                                <h2 className='text-center'>ADVENTUROUS</h2>
                                <p>Make memories with unique yet thrilling adventurous sports like bungee jumping, sky diving, scuba diving, rafting and many more!</p>
                                <img src="https://hblimg.mmtcdn.com/content/hubble/img/dubai/mmt/destination/m_Dubai_activity_adventure_l_453_681.jpg" alt="" className="menu-item-image w-100" />
                                <a href="https://www.makemytrip.com/tripideas/adventure-destinations" className="menu-item-link">
                                    View All
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#12c41b" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="shadow discover-card text-black">
                                <h2 className='text-center'>HILL STATIONS</h2>
                                <p>Breathe in the fresh mountain air, treat your eyes to the spectacular views and lose yourself in the charming climate to feel refreshed from within!</p>
                                <img src="https://www.trawell.in/blog/wp-content/uploads/2016/06/munnar1.jpg" alt="" className="menu-item-image w-100" />
                                <a href="https://www.makemytrip.com/tripideas/hills-mountains-destinations" className="menu-item-link">
                                    View All
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#12c41b" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="shadow discover-card text-black">
                                <h2 className='text-center'>FANTASY PLACES</h2>
                                <p>Try the exotic and comfortable travel ideas to make your holiday memorable!. Plan awesome relaxing places in India for peaceful vacations.</p>
                                <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/7b3f6e08-04b5-4de2-a646-845911544235-disneyland-north-america-september(1).jpg" alt="" className="menu-item-image w-100" />
                                <a href="https://traveltriangle.com/blog/fictional-places-that-you-can-visit/" className="menu-item-link">
                                    View All
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#12c41b" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="shadow discover-card text-black">
                                <h2 className='text-center'>HISTORICAL</h2>
                                <p>Explore historical places & countless ideas for an epic break and make way to explore the prominent monuments, streets, architectures!</p>
                                <img src="https://1.bp.blogspot.com/-N5smSuZ1mKc/UKtv7GbvxgI/AAAAAAAAAIc/eQdfWfoInK4/s1600/Historical+Places+in+india-Tajmahal.jpg" alt="" className="menu-item-image w-100" />
                                <a href="https://traveltriangle.com/blog/historical-places-in-the-world/" className="menu-item-link">
                                    View All
                                    <svg width="20px" height="20px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#12c41b" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover
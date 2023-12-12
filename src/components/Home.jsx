import React from 'react'
import '../styles/home.css'
import CardComponent from './CardComponent'

import TopImage from '../assets/fortnite-pictures-b5kfcchwazwiz3cs 1.png'
import InnerImage1 from '../assets/Fortnite_20180630171046 1.png'
import InnerImage2 from '../assets/5daa24d7cc4a0a62650c6b28 1.png'
import InnerImage3 from '../assets/maxresdefault 1.png'

const cardData = [
    {
        imageUrl: InnerImage1,
        altText: 'InnerImage1',
        exploreText: 'Explore large, destructible environments where no two games are ever the same.',
    },
    {
        imageUrl: InnerImage2,
        altText: 'InnerImage2',
        exploreText: 'Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale.',
    },
    {
        imageUrl: InnerImage3,
        altText: 'InnerImage3',
        exploreText: 'Discover even more ways to play across thousands of creator-made game genres.',
    },
];

const Home = () => {
    return (
        <div>
            <p class='epic-games-description'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</p>
            <img class='top-image' src={TopImage} alt='topImage' /><br /><br />
            <div class="fortnite-description">
                Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
            </div><br />
            <div class="button-container">
                <div class="button contact-us" align='center'>
                    Visit Website
                </div>
            </div><br /><br /><br /><br />
            <div className="image-container">
                {cardData.map((card, index) => (
                    <CardComponent
                        key={index}
                        imageUrl={card.imageUrl}
                        altText={card.altText}
                        exploreText={card.exploreText}
                    />
                ))}
            </div><br /><br />

            <div className="our-contribution">
                Our Contribution
            </div><br />
            <div className="core-offering">
                Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user<br /> community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to<br /> providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
            </div><br /><br /><br />
            <div className="row-container">
                <div>
                    <div className="number-highlight">
                        5M
                    </div><br />
                    <div className="daily-engagements">
                        Daily User <br /> Engagements <br />
                    </div>
                </div>

                <div>
                    <div className="number-highlight">
                        $500K
                    </div><br />
                    <div className="daily-engagements">
                        Revenue Surge for an<br />Platform<br />
                    </div>
                </div>

                <div>
                    <div className="number-highlight">
                        10X
                    </div><br />
                    <div className="daily-engagements">
                        ROAS on all our <br />marketing campaigns
                    </div>
                </div>
            </div><br /><br /><br /><br /><br />

            <div className="project-interest">
                Interested in delving deeper into the project?
            </div><br />

            <div className="contact-details">
                <span>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at </span>
                <span className="email">hello@abc.com</span>
                <span> </span>
                <span>or give us a call at </span>
                <span className="phone">+91 480 20802730.</span>
            </div><br /><br />

            <div className="button-container">
                <div className="button skype-contact">
                    Ring us on Skype
                </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="button contact-us">
                    Contact Us
                </div>
            </div><br /><br /><br /><br />


        </div>

    )
}

export default Home
import './landing.css';

export function Intro() {
    return (<div id="intro">
        <h1>Waste Pickup for a Cleaner, Greener Tomorrow</h1>
        <p>
            At cleanli, the environment is our priority. Experience hassle-free waste removal with our reliable and efficient service. We offer flexible schedules, competitive rates, and a commitment to environmental responsibility.
        </p>
    </div>)
}

export function Offer() {
    <div id='offer'>
        <h1>Services we provide</h1>
        <p>Domestic waste pickups</p>
        <p>Community waste pickups</p>
        <p>Industrial waste pickups</p>
        <p>Wastebin hiring</p>
        <p>Garbage Dumpster Giveaway</p>
    </div>
}

export function Purpose() {
    const purposes = [
        {
            source: "./grad-hat.png",
            title: "Timely waste pickup",
            description: "We provide a maximum of 24 hours wait time from when you notify us to pick up your waste. Besides that, we do routine collection of waste based on the estimated time that your waste might need to be picked up.",
        },
        {
            source: "./book-stack.png",
            title: "Fair pricing",
            description: "Do not let other institutions defraud you with their unfair systems by making you pay more than the services you use. Pay only for your waste pickup."
        },
        {
            source: "./office-building.png",
            title: "State-of-the-Art Facilities",
            description: "Our school is equipped with modern and innovative facilities, including science and computer labs, libraries, sports grounds, and more. These facilities provide students with the tools they need to excel in their studies and develop their talents."
        }];

    return (<div id='purpose'>
        <div id='why-here'>
            <h2>Why you should choose us</h2>
            <p>Waste Management Solutions</p>
        </div>
        <div id='features'>
            {purposes.map((obj, idx) => {
                return <PurposeElement key={idx} source={obj.source} title={obj.title} description={obj.description} />
            })}
        </div>
        <EnrollNow />
    </div>)
}

function EnrollNow() {
    return (<div id='enroll'>
        <p>Enroll your ward now</p>
        <img src='./arrow-right.png' alt='arrow right'></img>
    </div>)
}

function PurposeElement(obj: {
    source: string;
    title: string;
    description: string;
}) {
    return (<div className='purpose-elem'>
        <div className='img-container'><img src={obj.source} alt='dksd'></img></div>
        <h2>{obj.title}</h2>
        <p>{obj.description}</p>
    </div>)
}


export function Newsletter() {
    const newsletters = [
        {
            source: "./news1.png",
            brief: "New school fees release ahead of next academic year"
        },
        {
            source: "./news2.png",
            brief: "New school fees release ahead of next academic year"
        },
        {
            source: "./news3.png",
            brief: "New school fees release ahead of next academic year"
        }
    ]
    return (<div id='newsletter'>
        <h2>Latest Newsletter</h2>
        <p>Stay up to date with the latest news and events at our school</p>
        <div id='newsletter-container'>
            {newsletters.map((letter, idx) => {
                return (<NewsletterElement key={idx} source={letter.source} brief={letter.brief} />)
            })}
        </div>
        <div className='read-more'>
            <p>Read more</p>
            <img src='./arrow-right.png' alt='arrow right'></img>
        </div>
    </div>)
}

function NewsletterElement(obj: { source: string, brief: string }) {
    return (<div className='newsletter-elem'>
        <img src={obj.source} alt='dljsd'></img>
        <p>{obj.brief}</p>
    </div>)
}

export function Testimony() {
    return (<div id='testimony'>
        <div className='parent-testimony'>
            <p className='parent-words'>“ We appreciate the school's emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. ”</p>
            <p className='parent-name'>Mr. Nathan Offei Ansah, Parent</p>
        </div>
        <img src='./testimony.png' alt='parent photo'></img>
    </div>)
}

export function Invite() {
    const stats = [
        {
            value: "3000+",
            description: "Enrolled Students"
        },
        {
            value: "30",
            description: "Staff"
        },
        {
            value: "10,000",
            description: "Global Alumni"
        }
    ]
    return (<div id='invite'>
        <div id='stats'>
            <div id='invite-msg'>Join the winning school now</div>
            <div id='invite-elems-container'>
                {stats.map((obj, idx) => {
                    return (<div key={idx} className='invite-elem'>
                        <h2>{obj.value}</h2>
                        <p>{obj.description}</p>
                    </div>)
                })}
            </div>
        </div>
    </div>)
}

export function Motivation() {
    return (<div id='motivation'>
        <h2>Enroll your ward to join<br /> over 3000+ successful students</h2>
        <EnrollNow />
    </div>)
}

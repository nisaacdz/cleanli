import Link from 'next/link';
import './landing.css';

export function Intro() {
    return (<div id="intro">
        <h1>Waste Pickup for a Cleaner, Greener Tomorrow</h1>
        <ul>
            <li>At cleanli, the environment is our priority.</li>
            <li>
                Experience hassle-free waste removal with our reliable and efficient service.
            </li>
            <li>
                We offer flexible schedules, competitive rates, and a commitment to environmental responsibility.
            </li>
        </ul>
    </div>)
}

export function Reason() {
    const reasons = [
        {
            source: "./time.png",
            title: "Timely waste pickup",
            description: "We ensure waste pickup within 24 hours of notification, along with routine collections based on the estimated time your waste needs disposal."
        },
        {
            source: "./money.png",
            title: "Fair pricing",
            description: "Avoid being overcharged by unfair systems. With us, you pay only for the waste you generate."
        },
        {
            source: "./environment.png",
            title: "Eco-friendly practices",
            description: "We prioritize environmentally safe waste disposal and recycling methods, ensuring that your waste is handled responsibly to minimize our ecological footprint."
        }
    ];

    return (<div id='reason'>
        <div id='why-here'>
            <h1>Why you should choose us</h1>
            <h2>Waste Management Solutions</h2>
        </div>
        <div id='features'>
            {reasons.map((obj, idx) => {
                return <ReasonElement key={idx} source={obj.source} title={obj.title} description={obj.description} />
            })}
        </div>
        <RegisterNow />
    </div>)
}

function RegisterNow() {
    return (<div id='register'>
        <p>Sign up now</p>
        <img src='./arrow-right.png' alt='arrow right'></img>
    </div>)
}

function ReasonElement(obj: {
    source: string;
    title: string;
    description: string;
}) {
    return (<div className='reason-elem'>
        <div className='img-container'><img src={obj.source} alt='dksd'></img></div>
        <h2>{obj.title}</h2>
        <p>{obj.description}</p>
    </div>)
}

export function Objectives() {
    const objectives = [
        {
            title: "Mission",
            body: "To provide eco-friendly, efficient, and responsible waste collection and recycling services that help communities minimize waste, protect the environment, and contribute to a sustainable future."
        },
        {
            title: "Vision",
            body: "To lead the transition towards a zero-waste society where all waste is either reused, recycled, or sustainably disposed of, ensuring cleaner cities and a healthier planet for future generations."
        },
    ];

    const sdgoals = [
        {
            source: "./sdg11.png",
            link: "https://sdgs.un.org/goals/goal11",
            title: "Goal 11"
        },
        {
            source: "./sdg12.png",
            link: "https://sdgs.un.org/goals/goal12",
            title: "Goal 12"
        },
        {
            source: "./sdg13.png",
            link: "https://sdgs.un.org/goals/goal13",
            title: "Goal 13"
        },
        {
            source: "./sdg6.png",
            link: "https://sdgs.un.org/goals/goal6",
            title: "Goal 6"
        }
    ];

    const alignments = [
        {
            source: "./ipcc.png",
            brief: "Intergovernmental Panel on Climate Change",
            link: "https://www.ipcc.ch/",
        },
        {
            source: "./wef.jpg",
            brief: "World Economic Forum",
            link: "https://www.weforum.org/agenda/climate-action/",
        },
        {
            source: "./wri.png",
            brief: "World Resources Institute",
            link: "https://www.wri.org/climate"
        },
        {
            source: "./sdg.png",
            brief: "Sustainable Development Goals",
            link: "https://sdgs.un.org/goals",
        },
    ];
    return (<div id='objectives'>
        <h2>Our Objectives</h2>
        <p>Our mission, vision and their alignments with recognized call-to-action's</p>
        <div id='objectives-container'>
            {objectives.map((obj, idx) => {
                return (<ObjectiveElem key={idx} title={obj.title} body={obj.body} />)
            })}
        </div>
        <div id='sdg-container'>
            {sdgoals.map((obj, idx) => {
                return (<SDG key={idx} source={obj.source} link={obj.link} title={obj.title} />)
            })}
        </div>
        <div id='alignments-container'>
            {alignments.map((obj, idx) => {
                return (<AlignmentElem key={idx} source={obj.source} brief={obj.brief} link={obj.link} />)
            })}
        </div>
    </div>)
}

function AlignmentElem(obj: { source: string, brief: string, link: string }) {
    return (<Link className='alignment-elem' href={obj.link} target="_blank" rel="noopener noreferrer">
        <img src={obj.source} alt='alignment-img' />
    </Link>)
}

function SDG(obj: { source: string, link: string, title: string }) {
    return (<Link className='sdg' href={obj.link} target="_blank" rel="noopener noreferrer">
        <img src={obj.source} alt='sdg-img' className='sdg-img' />
        <h2>{obj.title}</h2>
    </Link>)
}

function ObjectiveElem(obj: { title: string, body: string }) {
    return (<div className='objective-elem'>
        <h2>{obj.title}</h2>
        <p>{obj.body}</p>
    </div>)
}

export function Testimony() {
    return (<div id='testimony'>
        <div className='parent-testimony'>
            <h2 className='parent-words'>“ Switching to this service has geen a game changer. No more stressing about missed pickups or dealing with delays. They handle everything smoothly and it's one less thing to worry about. ”</h2>
            <p className='parent-name'>Kojo Owusu, Ho Bankoe</p>
        </div>
        <img src='./testimony.png' alt='parent photo'></img>
    </div>)
}

export function Invite() {
    const services = [
        {
            service: "Domestic Waste Collection",
            info: ""
        },
        {
            service: "Community Waste Collection",
            info: ""
        },
        {
            service: "Industrial Waste Collection",
            info: ""
        },
        {
            service: "Waste Bin Rental",
            info: ""
        },
        {
            service: "Waste Bag Sales",
            info: ""
        },
        {
            service: "Garbage Dumpster Sales",
            info: ""
        }
    ];
    return (<div id='services'>
        <h2>Services we provide</h2>
        <ul className='services-container'>
            {services.map((obj, idx) => <ServiceElem key={idx} service={obj.service} info={obj.info} />)}
        </ul>
    </div>)
}

function ServiceElem(obj: { service: string, info: string }) {
    return (<li className='service-elem'>
        <h2>{obj.service}</h2>
        <p>{obj.info}</p>
    </li>)
}


export function Motivation() {
    return (<div id='motivation'>
        <h2>Register now and get 10 free pickups or 3 wastebins rental at discounted price.</h2>
        <RegisterNow />
    </div>)
}

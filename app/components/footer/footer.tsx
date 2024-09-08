import './footer.css';

export function Footer() {
    const contacts = [
        {
            logo: "./msg.png",
            contact: "cleanli@gmail.com"
        },
        {
            logo: "./call.png",
            contact: "+233245679328",
        },
        {
            logo: "./loc.png",
            contact: "Asamankese, near the Pentecost church",
        }
    ]
    return (<div id='footer'>
        <div id='footer-body'>
            <div>
                <h2>cleanli</h2>
                <p>Building Future Leaders.</p>
            </div>
            <div>
                <h2>Quick Links</h2>
                <div id='quick-links'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div>
                <h2>Contact Information</h2>
                <div id='contact-info'> {contacts.map((obj, idx) => {
                    return <ContactDetail key={idx} logo={obj.logo} contact={obj.contact} />;
                })} </div>    
            </div>
        </div>
        <hr id='footer-line' />
        <div id='footer-end'>
            <p>© 2025 cleanli. All rights reserved. Designed and developed by nisaacdz</p>
            <div id='footer-end-policies'>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Cookies Policies</p>
            </div>
        </div>
    </div>)
}


function ContactDetail(obj: { logo: string, contact: string }) {
    return (<div className='contact-detail'>
        <img src={obj.logo} alt='skdslj'></img>
        <p>{obj.contact}</p>
    </div>)
}
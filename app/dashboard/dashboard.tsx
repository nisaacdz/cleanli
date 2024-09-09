import { Bin, Site, User } from '@/app/data_types';
import './dashboard.css';
import Link from 'next/link';
import { Logout } from '../components/logout/logout';

function Profile({ user }: { user: User }) {
    return (
        <div className="profile-container" id="profile">
            <div className="profile-section">
                <ul className="profile-details">
                    <li className="profile-item">
                        <p className="profile-value">{user.name}</p>
                    </li>
                    <li className="profile-item">
                        <p className="profile-value">{user.email}</p>
                    </li>
                    <li className="profile-item">
                        <p className="profile-value">{user.contact}</p>
                    </li>
                </ul>
                <button className="edit-button" title='Edit Billing Info'>
                    <img src='./edit.png' alt='edit button image' />
                </button>
            </div>

        </div>
    );
}

function Billing({ user }: { user: User }) {
    return (
        <div className="billing-container" id="billing">
            <div className="billing-section">
                <ul className="billing-details">
                    <li className="billing-item">
                        <p className="billing-value">{user.billing.card}</p>
                    </li>
                    <li className="billing-item">
                        <p className="billing-value">{user.billing.number}</p>
                    </li>
                </ul>
            </div>
            <button className="edit-button" title='Edit Billing Info'>
                <img src='./edit.png' alt='edit button image' />
            </button>
        </div>
    );
}

function BinComponent({ bin }: { bin: Bin }) {
    return ((
        <li className="bin-item">
            <p className="bin-serial">{bin.id}</p>
            <p className="bin-volume">{`${bin.capacity} litres`}</p>
            <p className="bin-grade">{`Grade ${bin.condition}`}</p>
        </li>
    ))
}

function SiteComponent({ site }: { site: Site }) {
    return (<div className="site-item" >
        <div className='site-name'>{site.name}</div>
        <ul className="site-details">
            <li className="site-address">
                <div>Digital Address:</div>
                <Link href={`https://www.google.com/maps/search/?api=1&query=${site.digital_address}`} target="_blank" rel="noopener noreferrer">
                    {site.digital_address}
                </Link>
            </li>
            <li className="site-description">
                <p className="site-description-value">{site.description}</p>
            </li>
            <li className="site-contact">
                <div>Emergency Contact:</div>
                <p className="site-value">{site.contact}</p>
            </li>
            <li className="site-bins">
                {site.bins ? (
                    <div className='bins-label'>All bins at this collection point</div>
                ) : (
                    <div className='bins-label'>There are no registered bins at this collection point</div>
                )}
                <ul className="bins-list">
                    {site.bins.map((bin, binIndex) => (<BinComponent key={binIndex} bin={bin} />))}
                    <li className="adder-comp add-bin bin-item">
                        <p>Add a bin at this collection point</p>
                        <img src='./add.png' alt='add-img' title='Add a wastebin at this collection point'/>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    )
}

function SitesData({ user }: { user: User }) {
    return (
        <div className="sites-container" id="sites">
            <div className="section-title">Collection Points</div>
            {user.sites.map((site, index) => (<SiteComponent key={index} site={site} />))}
            <div className='add-pickup-point adder-comp'>
                <p>Add a waste pickup point</p>
                <img src='./add.png' alt='add-img' title='add waste pickup location'/>
            </div>
        </div>
    );
}

export function Dashboard({ user }: { user: User }) {
    return (
        <>
            <div className="dashboard-container" id="dashboard">
                <Profile user={user} />
                <Billing user={user} />
                <SitesData user={user} />
            </div>
            <Logout />
        </>
    );
}

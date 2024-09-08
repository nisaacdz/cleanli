import { Logout } from '../components/logout/logout'
import { Admin, Bin, Site } from '../data_types'
import './dashboard.css'

export function Dashboard({ admin, sites }: { admin: Admin, sites: Site[] }) {
    return <>
        <AdminDetails admin={admin} />
        <PendingPickups sites={sites} />
        <AdvancedSearch />
        <Logout />
    </>
}

function PendingPickups({ sites }: { sites: Site[] }) {
    return (<ul className='dashboard-section'>
        <h2>Pending pickups</h2>
        <ul className='pickup-site-container'>
            {sites.map((site, idx) => (<PickupSite key={idx} site={site} />))}
        </ul>
    </ul>)
}

function PickupSite({ site }: { site: Site }) {
    return (<li className='pickup-site'>
        <a className="site-address" href={`https://www.google.com/maps/search/?api=1&query=${site.digital_address}`}>{site.digital_address}</a>
        <p className='site-dsc'>{site.description}</p>
        <p className='site-name'>{site.name}</p>
        <ul className='pickup-bins-container'>
            {site.bins.map((bin, idx) => (<PickupBin key={idx} bin={bin} />))}
        </ul>
    </li>)
}

function PickupBin({ bin }: { bin: Bin }) {
    return (<li className='pickup-bin'>
        <p>{bin.id}</p>
        <p>{`${bin.capacity} litres`}</p>
        <p>{`Grade ${bin.condition}`}</p>
        <img className='clear-bin' src='./close.png' alt='close-icon' title='clear bin' />
    </li>)
}

function AdvancedSearch() {
    return (<div></div>)
}


function AdminDetails({ admin }: { admin: Admin }) {
    return (<div className='dashboard-section'>
        <Profile admin={admin} />
        <Contact admin={admin} />
    </div>)
}

function Profile({ admin }: { admin: Admin }) {
    return (
        <div className="profile-container" id="profile">
            <div className="profile-section">
                <ul className="profile-details">
                    <li className="profile-item">
                        <p className="profile-value">{admin.name}</p>
                    </li>
                    <li className="profile-item">
                        <p className="profile-value">{admin.id}</p>
                    </li>
                </ul>
            </div>

        </div>
    );
}

function Contact({ admin }: { admin: Admin }) {
    return (
        <div className="profile-container" id="profile">
            <div className="profile-section">
                <ul className="profile-details">
                    <li className="profile-item">
                        <p className="profile-value">{admin.email}</p>
                    </li>
                    <li className="profile-item">
                        <p className="profile-value">{admin.contact}</p>
                    </li>
                </ul>
                <button className="edit-button" title='Edit Billing Info'>
                    <img src='./edit.png' alt='edit button image' />
                </button>
            </div>

        </div>
    );
}
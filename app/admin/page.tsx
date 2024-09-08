import { Footer } from "../components/footer/footer";
import { Navigation } from "../components/navbar/navbar";
import { Dashboard } from './dashboard';
import { TempAdmin, PickupSites } from '@/app/database';

export default function DashboardPage() {
    return (<main>
        <Navigation selected={4} />
        <Dashboard admin={TempAdmin} sites={PickupSites}/>
        <Footer />
    </main>)
}

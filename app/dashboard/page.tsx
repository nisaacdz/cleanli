import { Footer } from "../components/footer/footer";
import { Navigation } from "../components/navbar/navbar";
import { Dashboard } from './dashboard';
import { TempUser } from '@/app/database';

export default function DashboardPage() {
    return (<main>
        <Navigation selected={4} />
        <Dashboard user={TempUser} />
        <Footer />
    </main>)
}

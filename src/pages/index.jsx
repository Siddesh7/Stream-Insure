import Marketplace from "../components/Marketplace";
import Navbar from "../components/Navbar";
import { insurances } from "../constant";
export default function Home() {
    return (
        <div className="min-h-[100vh] bg-[black]">
            <Navbar />
            <Marketplace insurances={insurances} />
        </div>
    );
}

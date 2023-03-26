import Marketplace from "../components/Marketplace";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-[100vh] bg-[black]">
            <Navbar />
            <Marketplace />
        </div>
    );
}

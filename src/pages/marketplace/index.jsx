import MarketplaceList from "../../components/Marketplace";
import Navbar from "../../components/Navbar";
import { insurances } from "../../constant";

export default function Marketplace() {
    return (
        <>
            <Navbar /> <MarketplaceList insurances={insurances} />
        </>
    );
}

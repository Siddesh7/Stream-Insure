import { useContractRead } from "wagmi";
import MarketplaceList from "../../components/Marketplace";
import Navbar from "../../components/Navbar";
import { insurances } from "../../constant";
import { deployer } from "../../contract";

export default function Marketplace() {
    const {
        data: insuranceDeployed,
        isError,
        isLoading,
    } = useContractRead({
        address: deployer.address,
        abi: deployer.abi,
        functionName: "getCreatedInsurances",
        chainId: 80001,
    });
    return (
        <>
            <Navbar /> <MarketplaceList insurances={insuranceDeployed} />
        </>
    );
}

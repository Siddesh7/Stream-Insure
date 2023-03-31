import { useContractRead } from "wagmi";
import MarketplaceList from "../../components/Marketplace";
import Navbar from "../../components/Navbar";
import { deployer } from "../../contract";

export default function Marketplace() {
    const { data: insuranceDeployed } = useContractRead({
        address: deployer.address,
        abi: deployer.abi,
        functionName: "getCreatedInsurances",
        chainId: 80001,
    });
    console.log(insuranceDeployed);
    return (
        <>
            <Navbar /> <MarketplaceList insurances={insuranceDeployed} />
        </>
    );
}

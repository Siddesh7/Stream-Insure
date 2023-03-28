import Navbar from "../components/Navbar";
import { abi } from "../contract";
import { useContractRead } from "wagmi";
export default function Home() {
    const {
        data: insuranceDeployed,
        isError,
        isLoading,
    } = useContractRead({
        address: "0x8cDB2922040334E6fBB0b863E08cF5A098fbE5E1",
        abi: abi,
        functionName: "getCreatedInsurances",
        chainId: 80001,
    });

    return (
        <div className="min-h-[100vh] bg-[black]">
            <Navbar />
            {insuranceDeployed.map((insurance) => (
                <div className="card w-72 bg-base-100 shadow-xl image-full h-64">
                    <div className="card-body">
                        <h2 className="text-white card-title">
                            {insurance.name}
                        </h2>

                        <div className="card-actions justify-end">
                            {/* <a href={`/insurance/${insurance.address}`}>
                         {" "}
                         <button className="btn btn-primary">
                             Read more
                         </button>
                     </a> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

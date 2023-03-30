import Navbar from "../components/Navbar";
import { deployer } from "../contract";
import { useContractRead } from "wagmi";
export default function Home() {
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
        <div className="min-h-[100vh] bg-[black] ">
            <Navbar />
            {insuranceDeployed && (
                <div className="w-[95%] m-auto mt-[40px]">
                    {" "}
                    <div clas>
                        {" "}
                        {insuranceDeployed.map((insurance) => (
                            <div className="card w-72 bg-base-100 shadow-xl image-full h-48">
                                <div className="card-body">
                                    <h2 className="text-white card-title">
                                        insurance 1
                                    </h2>

                                    <div className="card-actions justify-start">
                                        <a href={`/insurance/${insurance}`}>
                                            {" "}
                                            <button className="btn btn-primary">
                                                Read
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

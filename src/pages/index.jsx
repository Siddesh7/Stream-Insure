import Navbar from "../components/Navbar";
import { abi } from "../contract";
import { useContractRead } from "wagmi";
export default function Home() {
    const {
        data: insuranceDeployed,
        isError,
        isLoading,
    } = useContractRead({
        address: "0x0A790c41F149e8bDA8FE5334C8D97E2c9f7b3515",
        abi: abi,
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

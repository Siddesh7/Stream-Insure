import { useEffect, useState } from "react";
import {
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from "wagmi";
import Navbar from "../../components/Navbar";

import { deployer } from "../../contract";

export default function CreateBond() {
    const [insurance, setInsurance] = useState({
        assetInsured: "",
        assetDeposited: "",
        depositAmount: "",
        premiumAsset: "",
        monthlyPremium: "",
        thresholdPrice: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setInsurance((prevData) => ({
            ...prevData,
            [name]: value.toString(),
        }));
    };
    const { config: createInsuranceConfig } = usePrepareContractWrite({
        address: deployer.address,
        abi: deployer.abi,
        functionName: "createInsurance",
        args: [
            insurance.thresholdPrice,
            insurance.premiumAsset,
            insurance.assetInsured,
            insurance.depositAmount,
            insurance.assetDeposited,
            insurance.monthlyPremium,
        ],
    });
    const {
        data,
        write: createInsurance,
        status,
    } = useContractWrite(createInsuranceConfig);
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });
    const [shouldRenderRedirect, setShouldRenderRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRenderRedirect(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <Navbar />
            <div className="w-[90%] m-auto mt-[100px]">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative h-[211px]">
                    <div className="p-6">
                        <h2 className="text-lg font-bold text-white mb-2">
                            Crypto Asset Insurance
                        </h2>
                        <p className="text-gray-400 text-base">
                            Create an insurance bond tracking an asset listed.
                        </p>

                        <label
                            htmlFor="my-modal-3"
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded absolute bottom-[20px]"
                        >
                            Create
                        </label>
                    </div>
                </div>
                {/* The button to open modal */}

                {/* Put this part before </body> tag */}
                <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="my-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                        >
                            ✕
                        </label>
                        <h3 className="text-lg font-bold">
                            Please provide the details for your insurance bond
                            creation
                        </h3>
                        <div className="flex flex-col gap-4 mt-[10px]">
                            <select
                                className="select select-primary w-full"
                                onChange={handleInputChange}
                                name="assetInsured"
                            >
                                <option disabled selected>
                                    What asset are you creating the insurance
                                    for?
                                </option>
                                <option
                                    value={
                                        "0x007A22900a3B98143368Bd5906f8E17e9867581b"
                                    }
                                >
                                    Bitcoin
                                </option>
                                <option
                                    value={
                                        "0x0715A7794a1dc8e42615F059dD6e406A6594651A"
                                    }
                                >
                                    Ethereum
                                </option>
                                <option
                                    value={
                                        "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
                                    }
                                >
                                    Matic
                                </option>
                                <option
                                    value={
                                        "0xEB0fb293f368cE65595BeD03af3D3f27B7f0BD36"
                                    }
                                >
                                    Solana
                                </option>
                            </select>
                            <select
                                className="select select-primary w-full"
                                onChange={handleInputChange}
                                name="assetDeposited"
                                required
                            >
                                <option disabled selected>
                                    Which asset are you depositing into the
                                    bond?
                                </option>

                                <option
                                    value={
                                        "0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f"
                                    }
                                >
                                    DAI
                                </option>
                                <option
                                    value={
                                        "0x1abd0a92ce2913a50c8a82c90f30736e50770e90"
                                    }
                                >
                                    fUSD
                                </option>
                            </select>
                            <input
                                type="number"
                                placeholder="How much are you depositing?"
                                className="input input-bordered input-info w-full"
                                onChange={handleInputChange}
                                name="depositAmount"
                            />
                            <select
                                className="select select-primary w-full"
                                onChange={handleInputChange}
                                name="premiumAsset"
                            >
                                <option disabled selected>
                                    Which asset will you accept for premium
                                    payments?
                                </option>
                                <option
                                    value={
                                        "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f"
                                    }
                                >
                                    fDAIx
                                </option>
                                <option
                                    value={
                                        "0x918E0d5C96cAC79674E2D38066651212be3C9C48"
                                    }
                                    disabled
                                >
                                    fTUSDx
                                </option>
                                <option
                                    value={
                                        "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7"
                                    }
                                    disabled
                                >
                                    fUSDCx
                                </option>
                            </select>
                            <input
                                type="number"
                                placeholder="How much is the monthly premium? 100/mo"
                                className="input input-bordered input-info w-full"
                                onChange={handleInputChange}
                                name="monthlyPremium"
                            />
                            <input
                                type="number"
                                placeholder="Threshold price? Triggers payment to buyer(insured amount)"
                                className="input input-bordered input-info w-full"
                                required
                                onChange={handleInputChange}
                                name="thresholdPrice"
                            />

                            {status == "loading" ? (
                                <button
                                    className="btn btn-success relative"
                                    onClick={createInsurance}
                                    disabled
                                >
                                    <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>{" "}
                                </button>
                            ) : (
                                <button
                                    className="btn btn-success"
                                    onClick={createInsurance}
                                >
                                    Create bond
                                </button>
                            )}

                            {isSuccess && (
                                <div>
                                    {shouldRenderRedirect && <Redirect />}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Redirect() {
    const { data: insuranceDeployed } = useContractRead({
        address: deployer.address,
        abi: deployer.abi,
        functionName: "getCreatedInsurances",
        chainId: 80001,
    });
    const host = "http://localhost:5173";
    const [insData, setInsData] = useState(null);
    useEffect(() => {
        if (insuranceDeployed != undefined) {
            setInsData(insuranceDeployed[insuranceDeployed.length - 1]);
            console.log(insuranceDeployed[insuranceDeployed.length - 1]);
        }
    }, [insuranceDeployed]);
    return (
        <div>
            {insData && (
                <div>
                    {window.location.replace(`${host}/insurance/${insData}`)}
                </div>
            )}
        </div>
    );
}

import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

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
            [name]: value,
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
    const { write: createInsurance } = useContractWrite(createInsuranceConfig);

    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Asset Insurance</h2>
                    <p>Create an insurance bond tracking an asset listed.</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-3" className="btn btn-primary">
                            Create
                        </label>
                    </div>
                </div>
            </div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
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
                                What asset are you creating the insurance for?
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
                                Which asset are you depositing into the bond?
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
                            >
                                fTUSDx
                            </option>
                            <option
                                value={
                                    "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7"
                                }
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

                        <button
                            className="btn btn-success"
                            onClick={createInsurance}
                        >
                            Create bond
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

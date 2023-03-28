import { useState } from "react";

export default function CreateBond() {
    const [approved, setApproved] = useState(true);
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
    return (
        <div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Asset Insurance</h2>
                    <p>Creeate an insurance bond tracking an asset listed.</p>
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
                            <option>Bitcoin</option>
                            <option>Ethereum</option>
                            <option>Polygon</option>
                            <option>Solana</option>
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
                            <option>USDC</option>
                            <option>DAI</option>
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
                            <option>fDAIx</option>
                            <option>fUSDCx</option>
                        </select>

                        <input
                            type="number"
                            placeholder="How much is the monthly premium?"
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
                        {!approved ? (
                            <button
                                className="btn btn-info"
                                onClick={() => {
                                    console.log(insurance);
                                }}
                            >
                                Approve {insurance.assetDeposited} spend
                            </button>
                        ) : (
                            <button className="btn btn-success">
                                Create bond
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

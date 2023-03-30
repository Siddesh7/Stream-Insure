import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    useContractRead,
    usePrepareContractWrite,
    useContractWrite,
    useProvider,
    useSigner,
} from "wagmi";
import Navbar from "../../components/Navbar";
import { calculateFlowRate, updateFlowPermissions } from "../../constant";

import { insuranceBond } from "../../contract";

const InsurancePage = () => {
    const { contract } = useParams();
    const [approved, setApproved] = useState(false);
    const [bondSold, setBondSold] = useState(false);

    const [priceData, setPriceData] = useState({
        flowRate: 0,
        insuredAmt: 0,
        threshold: 0,
    });
    const {
        data: insuranceData,
        isError,
        isLoading,
    } = useContractRead({
        address: contract,
        abi: insuranceBond.abi,
        functionName: "getInsuranceData",
        chainId: 80001,
    });

    const { config: buyBond } = usePrepareContractWrite({
        address: contract,
        abi: insuranceBond.abi,
        functionName: "buyInsurance",
    });
    const { write: buy } = useContractWrite(buyBond);

    const provider = useProvider();
    const signer = useSigner();
    function handleInputChange(name, value) {
        setPriceData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    useEffect(() => {
        if (
            insuranceData != undefined &&
            insuranceData[1] != "0x0000000000000000000000000000000000000000"
        ) {
            setBondSold(true);
        }
        if (insuranceData) {
            handleInputChange(
                "insuredAmt",
                ethers.BigNumber.from(insuranceData[2]).toNumber()
            );
            handleInputChange(
                "flowRate",
                calculateFlowRate(
                    ethers.BigNumber.from(insuranceData[4]).toNumber()
                )
            );
            handleInputChange(
                "threshold",
                ethers.BigNumber.from(insuranceData[5]).toNumber()
            );
        }

        console.log(insuranceData);
    }, [insuranceData]);

    return (
        <div>
            <Navbar />

            {insuranceData && (
                <div className="w-[95%] m-auto">
                    <div className="flex justify-between mt-[30px] gap-8">
                        <div className="card w-[33%] bg-base-100 shadow-xl border-4">
                            <div className="card-body">
                                <h2 className="card-title text-white">
                                    Insurer
                                </h2>
                                <p>{insuranceData[0]}</p>
                            </div>
                        </div>
                        <div className="card w-[33%] bg-base-100 shadow-xl border-4">
                            <div className="card-body">
                                <h2 className="card-title text-white">
                                    Insured Amount in Vault
                                </h2>
                                <p>{priceData.insuredAmt}</p>
                            </div>
                        </div>{" "}
                        <div className="card w-[33%] bg-base-100 shadow-xl border-4">
                            <div className="card-body">
                                <h2 className="card-title text-white">
                                    Flowrate Premium
                                </h2>
                                <p>{priceData.flowRate}</p>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="flex mt-[30px] items-center gap-8">
                        <h2 className="text-[35px] text-white">
                            Insurance Bond Details
                        </h2>

                        {!bondSold && (
                            <label
                                htmlFor="my-modal-3"
                                className="btn btn-success"
                            >
                                Buy bond
                            </label>
                        )}
                    </div>
                    <div>
                        {/* Put this part before </body> tag */}
                        <input
                            type="checkbox"
                            id="my-modal-3"
                            className="modal-toggle"
                        />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <label
                                    htmlFor="my-modal-3"
                                    className="btn btn-sm btn-circle absolute right-2 top-2"
                                >
                                    ✕
                                </label>
                                {!approved ? (
                                    <h3 className="font-bold text-lg">
                                        Authorise fDAIx spend
                                    </h3>
                                ) : (
                                    <h3 className="font-bold text-lg">
                                        Starting a premium payment stream..!
                                        Buying the bond
                                    </h3>
                                )}
                                {!approved ? (
                                    <p className="py-4">
                                        This allows operator to create a premium
                                        payment stream from your account
                                    </p>
                                ) : (
                                    <p className="py-4">
                                        You're about to buy the insurance bond
                                    </p>
                                )}
                                {!approved ? (
                                    <button
                                        className="btn  btn-active btn-primary"
                                        onClick={async () => {
                                            const state =
                                                await updateFlowPermissions(
                                                    contract,
                                                    "10000000000000000000000000",
                                                    7,
                                                    provider,
                                                    signer
                                                );
                                            setApproved(state);
                                        }}
                                    >
                                        Approve spend
                                    </button>
                                ) : (
                                    <button
                                        className="btn  btn-active btn-success"
                                        onClick={buy}
                                    >
                                        Buy
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[30px] gap-8">
                        <div className="card w-[33%] bg-base-100 shadow-xl border-4">
                            <div className="card-body">
                                <h2 className="card-title text-white">
                                    Price threshold
                                </h2>
                                <span className="text-[10px] mt-[-10px]">
                                    This is the breaking condition
                                </span>
                                <p>{priceData.threshold}</p>
                            </div>
                        </div>
                        <div className="card w-[33%] bg-base-100 shadow-xl border-4">
                            <div className="card-body">
                                <h2 className="card-title text-white">
                                    Asset held in the bond
                                </h2>
                                <p>{insuranceData[3]}</p>
                            </div>
                        </div>{" "}
                        <div className="card w-[33%] bg-base-100 shadow-xl border-4">
                            <div className="card-body">
                                <h2 className="card-title text-white">
                                    Current Price (insured asset).
                                </h2>
                                <p>{"3000"}</p>
                            </div>
                        </div>
                    </div>
                    {bondSold && (
                        <div className="alert alert-info shadow-lg my-[20px]">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-current flex-shrink-0 w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span>
                                    {insuranceData[1]} already has bought this
                                    bond.
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default InsurancePage;

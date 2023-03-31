import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    useContractRead,
    usePrepareContractWrite,
    useContractWrite,
    useProvider,
    useSigner,
    useAccount,
    erc20ABI,
} from "wagmi";
import Navbar from "../../components/Navbar";
import {
    AssetUnderlying,
    calculateFlowRate,
    shortenAddress,
    updateFlowPermissions,
} from "../../constant";

import { insuranceBond } from "../../contract";

const InsurancePage = () => {
    const { contract } = useParams();
    const [approved, setApproved] = useState(false);
    const [approveDeposit, setApprovedDeposit] = useState(false);
    const [bondSold, setBondSold] = useState(false);

    const [priceData, setPriceData] = useState({
        flowRate: 0,
        insuredAmt: 0,
        threshold: 0,
    });
    const { data: insuranceData } = useContractRead({
        address: contract,
        abi: insuranceBond.abi,
        functionName: "getInsuranceData",
        chainId: 80001,
    });
    const { data: readyToBuy } = useContractRead({
        address: contract,
        abi: insuranceBond.abi,
        functionName: "deposit",
        chainId: 80001,
    });
    const { address } = useAccount();
    const { config: buyBond } = usePrepareContractWrite({
        address: contract,
        abi: insuranceBond.abi,
        functionName: "buyInsurance",
    });
    const { write: buy } = useContractWrite(buyBond);
    const { config: depositFund } = usePrepareContractWrite({
        address: contract,
        abi: insuranceBond.abi,
        functionName: "depositInsuredAmount",
    });
    const { write: depositToken } = useContractWrite(depositFund);
    const { config: approveToken } = usePrepareContractWrite({
        address: insuranceData[3],
        abi: erc20ABI,
        functionName: "approve",
        args: [contract, "10000000000000000000000000000"],
    });
    const { write: approveTokenDeposit } = useContractWrite(approveToken);

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

        console.log(bondSold);
    }, [insuranceData]);

    return (
        <div>
            <Navbar />

            {insuranceData && (
                <div className="flex flex-col items-center justify-center mt-8 w-[90%] m-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-8">
                        Insurance Parameters
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg font-bold mb-2 text-green-500">
                                Insurer
                            </h2>
                            <a
                                href={`https://mumbai.polygonscan.com/address/${insuranceData[0]}`}
                                className="text-gray-700"
                            >
                                {shortenAddress(insuranceData[0])}
                            </a>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg font-bold mb-2 text-green-500">
                                Insured Amount in vault
                            </h2>
                            <p className="text-gray-700">
                                {priceData.insuredAmt}
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg font-bold mb-2 text-green-500">
                                Flowrate in $/mo (Premium)
                            </h2>
                            <p className="text-gray-700">
                                {priceData.flowRate}
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg font-bold mb-2 text-green-500">
                                Price threshold
                            </h2>
                            <p className="text-gray-700">
                                {priceData.threshold}
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <h2 className="text-lg font-bold mb-2 text-green-500">
                                Asset held in the vault
                            </h2>
                            <a
                                href={`https://mumbai.polygonscan.com/address/${insuranceData[3]}`}
                                className="text-gray-700"
                            >
                                {shortenAddress(insuranceData[3])}{" "}
                            </a>
                        </div>
                        {bondSold && (
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <h2 className="text-lg font-bold mb-2 text-green-500">
                                    Buyer
                                </h2>
                                <a
                                    href={`https://mumbai.polygonscan.com/address/${insuranceData[1]}`}
                                    className="text-gray-700"
                                >
                                    {shortenAddress(insuranceData[1])}
                                </a>
                            </div>
                        )}
                    </div>
                    {!bondSold && readyToBuy && (
                        <div className="my-[30px]">
                            {insuranceData[0] != address && (
                                <label
                                    htmlFor="my-modal-3"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
                                >
                                    Buy bond
                                </label>
                            )}
                        </div>
                    )}
                    {!readyToBuy && (
                        <div>
                            {insuranceData[0] == address ? (
                                <div>
                                    {!approveDeposit ? (
                                        <button
                                            className="btn btn-primary my-[20px]"
                                            onClick={() => {
                                                approveTokenDeposit();
                                                setApprovedDeposit(true);
                                            }}
                                        >
                                            {" "}
                                            Approve
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary my-[20px] "
                                            onClick={depositToken}
                                        >
                                            {" "}
                                            Deposit Insurance
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <h3 className="text-red-500 text-[20px] my-[30px]">
                                        This contract is not funded by the
                                        insurance creator :(
                                    </h3>
                                </div>
                            )}
                        </div>
                    )}
                    <div>
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
                                        className="btn btn-active btn-primary w-full mb-4"
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
                                        className="btn btn-active btn-success w-full mb-4"
                                        onClick={buy}
                                    >
                                        Buy
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    {bondSold && (
                        <div className="alert alert-info shadow-lg my-4 mx-auto text-center">
                            <a
                                href={`https://mumbai.polygonscan.com/address/${insuranceData[1]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                {insuranceData[1]} already has bought this bond.
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default InsurancePage;

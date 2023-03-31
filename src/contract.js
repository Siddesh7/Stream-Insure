export const deployer = {
    address: "0x6D38c45732ae2B29Ef6339ed976F75d9E6a95fE9",
    abi: [
        {
            inputs: [
                {
                    internalType: "contract LinkTokenInterface",
                    name: "_link",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_registrar",
                    type: "address",
                },
                {
                    internalType: "contract AutomationRegistryInterface",
                    name: "_registry",
                    type: "address",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            stateMutability: "payable",
            type: "fallback",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "InsurancesRegistered",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "allowAsset",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "int256",
                    name: "_thresh",
                    type: "int256",
                },
                {
                    internalType: "contract ISuperToken",
                    name: "_token",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "assetInsured",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_insuredAmt",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "_tokenAddress",
                    type: "address",
                },
                {
                    internalType: "int96",
                    name: "_flowRate",
                    type: "int96",
                },
            ],
            name: "createInsurance",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "getCreatedInsurances",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "i_link",
            outputs: [
                {
                    internalType: "contract LinkTokenInterface",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "i_registry",
            outputs: [
                {
                    internalType: "contract AutomationRegistryInterface",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "insuranceName",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "insuredAmt",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "name",
                    type: "string",
                },
                {
                    internalType: "bytes",
                    name: "encryptedEmail",
                    type: "bytes",
                },
                {
                    internalType: "address",
                    name: "upkeepContract",
                    type: "address",
                },
                {
                    internalType: "uint32",
                    name: "gasLimit",
                    type: "uint32",
                },
                {
                    internalType: "address",
                    name: "adminAddress",
                    type: "address",
                },
                {
                    internalType: "bytes",
                    name: "checkData",
                    type: "bytes",
                },
                {
                    internalType: "bytes",
                    name: "offchainConfig",
                    type: "bytes",
                },
                {
                    internalType: "uint96",
                    name: "amount",
                    type: "uint96",
                },
            ],
            name: "registerAndPredictID",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "registrar",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "totalInsuranceBonds",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            stateMutability: "payable",
            type: "receive",
        },
    ],
};

export const insuranceBond = {
    abi: [
        {
            inputs: [
                {
                    internalType: "int256",
                    name: "_threshold",
                    type: "int256",
                },
                {
                    internalType: "contract ISuperToken",
                    name: "_token",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "assetInsured",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_insuredAmt",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "_tokenAddress",
                    type: "address",
                },
                {
                    internalType: "int96",
                    name: "_flowRate",
                    type: "int96",
                },
                {
                    internalType: "address",
                    name: "_insurer",
                    type: "address",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            stateMutability: "payable",
            type: "fallback",
        },
        {
            inputs: [],
            name: "assetHeld",
            outputs: [
                {
                    internalType: "contract IERC20",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "assetHeldAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "buyInsurance",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "buyer",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "int96",
                    name: "amountInEther",
                    type: "int96",
                },
            ],
            name: "calculateFlowRate",
            outputs: [
                {
                    internalType: "int96",
                    name: "",
                    type: "int96",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes",
                    name: "",
                    type: "bytes",
                },
            ],
            name: "checkUpkeep",
            outputs: [
                {
                    internalType: "bool",
                    name: "upkeepNeeded",
                    type: "bool",
                },
                {
                    internalType: "bytes",
                    name: "",
                    type: "bytes",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "deposit",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "depositInsuredAmount",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [],
            name: "flowRate",
            outputs: [
                {
                    internalType: "int96",
                    name: "",
                    type: "int96",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getInsuranceData",
            outputs: [
                {
                    components: [
                        {
                            internalType: "address",
                            name: "insurer",
                            type: "address",
                        },
                        {
                            internalType: "address",
                            name: "buyer",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "insuredAmmount",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "assetHeld",
                            type: "address",
                        },
                        {
                            internalType: "int96",
                            name: "flowRate",
                            type: "int96",
                        },
                        {
                            internalType: "int256",
                            name: "threshold",
                            type: "int256",
                        },
                    ],
                    internalType: "struct InsuranceBond.insuranceData",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getLatestPrice",
            outputs: [
                {
                    internalType: "int256",
                    name: "",
                    type: "int256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "hasPurchased",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "insuredAmmount",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "insurer",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "myInsuranceData",
            outputs: [
                {
                    internalType: "address",
                    name: "insurer",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "buyer",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "insuredAmmount",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "assetHeld",
                    type: "address",
                },
                {
                    internalType: "int96",
                    name: "flowRate",
                    type: "int96",
                },
                {
                    internalType: "int256",
                    name: "threshold",
                    type: "int256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes",
                    name: "",
                    type: "bytes",
                },
            ],
            name: "performUpkeep",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "priceOfInsuredAsset",
            outputs: [
                {
                    internalType: "int256",
                    name: "",
                    type: "int256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "status",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "threshold",
            outputs: [
                {
                    internalType: "int256",
                    name: "",
                    type: "int256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "token",
            outputs: [
                {
                    internalType: "contract ISuperToken",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            stateMutability: "payable",
            type: "receive",
        },
    ],
};

export const ERC20 = {
    abi: [
        {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Approval",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
            ],
            name: "allowance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "approve",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "decimals",
            outputs: [
                {
                    internalType: "uint8",
                    name: "",
                    type: "uint8",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "subtractedValue",
                    type: "uint256",
                },
            ],
            name: "decreaseAllowance",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "addedValue",
                    type: "uint256",
                },
            ],
            name: "increaseAllowance",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "name",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "transfer",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
};

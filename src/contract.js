export const abi = [
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
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [
            {
                internalType: "address payable",
                name: "_recipient",
                type: "address",
            },
        ],
        name: "transferEther",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
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
        stateMutability: "payable",
        type: "receive",
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
];

export const insuranceBond = [
    {
        inputs: [],
        name: "buyInsurance",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "depositInsuredAmount",
        outputs: [],
        stateMutability: "payable",
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
        stateMutability: "payable",
        type: "receive",
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
];

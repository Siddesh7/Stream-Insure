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

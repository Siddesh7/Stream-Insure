import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
export const insurances = [
    {
        name: "Insurance 1",
        category: "Cryptourrency",
        threshold: 26000,
        address: "767676",
    },
];

export function calculateFlowRate(amountInWei) {
    if (isNaN(amountInWei) || amountInWei <= 0) {
        alert("You can only calculate a flowRate based on a number");
        return;
    } else {
        const flowRateInEther = (
            (amountInWei / 10 ** 18) *
            30 *
            24 *
            3600
        ).toFixed(2);
        return flowRateInEther;
    }
}

export async function updateFlowPermissions(
    operator,
    flowRateAllowance,
    permissionType,
    providerr,
    signerr
) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const sf = await Framework.create({
        chainId: Number(80001),
        provider: provider,
    });

    console.log(signer);
    const superSigner = sf.createSigner({ signer: signer });

    console.log(await superSigner.getAddress());
    const daix = await sf.loadSuperToken("fDAIx");

    console.log(daix);

    try {
        const updateFlowOperatorOperation = daix.updateFlowOperatorPermissions({
            flowOperator: operator,
            permissions: permissionType,
            flowRateAllowance: flowRateAllowance,
            // userData?: string
        });

        console.log("Updating your flow permissions...");

        const result = await updateFlowOperatorOperation.exec(signer);
        console.log(result);

        console.log(
            `Congrats - you've just updated flow permissions for 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
      Network: Goerli
      Super Token: DAIx
      Operator: ${operator}
      Permission Type: ${permissionType},
      Flow Rate Allowance: ${flowRateAllowance}
      `
        );
        return true;
    } catch (error) {
        console.log(
            "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
        );
        console.error(error);
        return false;
    }
}

export const ChainlinkPricefeeds = {
    Bitcoin: "0x007A22900a3B98143368Bd5906f8E17e9867581b",
    Ethereum: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    Matic: "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada",
    Solana: "0xEB0fb293f368cE65595BeD03af3D3f27B7f0BD36",
};
export const SuperToken = {
    fDAIx: "0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f",
    fUSDCx: "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7",
    fTUSDx: "0x918E0d5C96cAC79674E2D38066651212be3C9C48",
};
export const AssetUnderlying = {
    "0x1abd0a92ce2913a50c8a82c90f30736e50770e90": "fUSD",
    "0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f": "DAI",
};

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

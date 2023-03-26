import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./polyfills";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import App from "./App";

const { chains, provider } = configureChains(
    [polygonMumbai],
    [alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_KEY })]
);
const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <App />
            </RainbowKitProvider>
        </WagmiConfig>
    </React.StrictMode>
);

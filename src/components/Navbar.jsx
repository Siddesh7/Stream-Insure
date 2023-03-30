import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
    return (
        <div className="navbar w-[95%] m-auto pt-[20px]">
            <div className="navbar-start">
                <a href="/" className="btn btn-ghost normal-case text-3xl">
                    SuperStream
                </a>
            </div>

            <div className="navbar-end">
                <ConnectButton />
            </div>
        </div>
    );
}

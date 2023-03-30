import Navbar from "../components/Navbar";
import { deployer } from "../contract";
import { useContractRead } from "wagmi";
export default function Home() {
    return (
        <div className="min-h-[100vh] bg-[black] ">
            <Navbar />
            <div className="flex flex-wrap justify-center gap-10 mt-[70px] md:w-full w-[90%] m-auto">
                <div className="w-full sm:w-1/2 md:w-1/3">
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative h-[211px]">
                        <div className="p-6">
                            <h2 className="text-lg font-bold text-white mb-2">
                                Crypto Asset Insurance
                            </h2>
                            <p className="text-gray-400 text-base">
                                Protect your crypto assets from high volatility
                                by buying insurance.
                            </p>
                            <a
                                href="/marketplace"
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded absolute bottom-[20px]"
                            >
                                Explore Marketplace
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3">
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative h-[211px]">
                        <div className="p-6">
                            <h2 className="text-lg font-bold text-white mb-2">
                                Crypto Asset Insurance
                            </h2>
                            <p className="text-gray-400 text-base">
                                Protect your crypto assets from high volatility
                                by buying insurance.
                            </p>
                            <a
                                href="/insurance/create"
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded absolute bottom-[20px]"
                            >
                                Create Insurance
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3">
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative h-[211px]">
                        <div className="p-6">
                            <h2 className="text-lg font-bold text-white mb-2">
                                Weather Calamity Insurance
                            </h2>
                            <p className="text-gray-400 text-base">
                                Coming Soon...
                            </p>
                            <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded cursor-not-allowed absolute bottom-[20px]">
                                Coming Soon
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

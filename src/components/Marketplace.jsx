export default function MarketplaceList({ insurances }) {
    return (
        <div className="w-[92%] m-auto">
            <div className="flex gap-8 mt-[40px]">
                {insurances.map((insurance, index) => (
                    <div className="w-full sm:w-1/2 md:w-1/3">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative h-[171px]">
                            <div className="p-6">
                                <h2 className="text-[30px] font-bold text-white mb-2">
                                    {`Insurance #${index}`}
                                </h2>

                                <a
                                    href={`insurance/${insurance}`}
                                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded absolute bottom-[20px]"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function MarketplaceList({ insurances }) {
    console.log(insurances);
    return (
        <div className="w-[92%] m-auto">
            <div className="flex gap-8">
                {insurances.map((insurance) => (
                    <div className="card w-72 bg-base-100 shadow-xl image-full h-64">
                        <div className="card-body">
                            <h2 className="text-white card-title">
                                {insurance.name}
                            </h2>
                            <p>
                                Category: <span>{insurance.category}</span>
                                <br></br>
                                Threshold:<span>{insurance.threshold}</span>
                            </p>

                            <div className="card-actions justify-end">
                                <a href={`/insurance/${insurance.address}`}>
                                    {" "}
                                    <button className="btn btn-primary">
                                        Read more
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

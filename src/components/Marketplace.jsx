import cbg from "../assets/cbg.png";
export default function Marketplace() {
    return (
        <div className="w-[92%] m-auto">
            <div className="flex gap-8">
                <div className="card w-72 bg-base-100 shadow-xl image-full h-72">
                    <figure>
                        <img src={cbg} className="cover" alt="bg" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure>
                        <img src={cbg} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

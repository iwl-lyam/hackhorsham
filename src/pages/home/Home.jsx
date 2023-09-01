import './home.css'
import '../../App.css'

export default function Home() {

    return (
        <>
            <div>
                <div className="bg-primary mb-1">
                    <div className="p-3">
                        <h1>Hack Horsham</h1>
                        <h2>Promoting STEM to kids</h2>
                    </div>
                </div>

                <div id="carouselExample" className="carousel slide cont">
                    <div className="carousel-inner">
                        <div className="carousel-item active cont">
                            <img src="reading.jpg" className="d-block w-100" alt="Person reading a book" />
                            <div className="p-2 m-4 bottom-left textblock">
                                <h2>Inspiring people about tech</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img height="100%" src="statue.jpg" className="d-block w-100" alt="Model" />
                            <div className="p-2 m-4 bottom-left textblock">
                                <h2>Promoting creativity and innovation</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="roblox.png" className="d-block w-100" alt="Screenshot of Roblox Studio" />
                            <div className="p-2 m-4 bottom-left textblock">
                                <h2>Teaching kids how to be developers</h2>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

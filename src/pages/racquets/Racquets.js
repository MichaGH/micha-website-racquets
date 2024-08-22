import { Link, useLoaderData } from "react-router-dom";

const Racquets = () => {
    
    const racquets = useLoaderData();
    
    return ( 
        <div className="racquets">
            <h2>Available Racquets</h2>
            <div className="racquets-list">
                {racquets.map(racquet => (
                    <div className="racquet-row">
                        <div className="racquet-row-title">
                            <h4>
                            Yonex { racquet.model } { racquet.submodel }
                            </h4>
                        </div>
                                            
                        <Link 
                        to={ racquet.id.toString() } 
                        key={ racquet.id }>
                        Show Details
                        </Link>
                    </div>

                    
                ))}
            </div>
            
            
        </div>
     );
}
 
export default Racquets;

// Loader Function

export const racquetsLoader = async () => {
    const res = await fetch('http://localhost:8000/racquets');

    if (!res.ok) {
        throw Error('Could not fetch the racquets data');
    }

    return res.json()
}
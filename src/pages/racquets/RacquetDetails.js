import { Link, Navigate, redirect, useLoaderData, useParams } from "react-router-dom";
const RacquetDetails = () => {
    
    const {id} = useParams();
    const racquet = useLoaderData();
    const specsKeys = [
        ["headSize", "Head Size", 0],
        ["weight", "Weight", 1],
        ["gripSize", "Grip Size", 2],
        ["length", "Length", 3],
        ["widthRange", "Width Range", 4],
        ["balancePoint", "Balance Point", 5],
        ["color", "Color", 6],
        ["stringPattern", "String Pattern", 7],
        ["stringAdvice", "String Advice", 8],
        ["madeIn", "Made in", 9]
    ];

    return (
        <div className="racquet-details">
            <div className="racquet-row">
                <h2>
                Yonex { racquet.model } { racquet.submodel }
                </h2>
                <Link to="/racquets">Back</Link>
            </div>
            <div className="racquet-details-table">
               {specsKeys.map( specKey => (
                    <div className="rdt-row" key={ specKey[2] }>
                        <div className="rdt-row-name">
                            { specKey[1] }:
                        </div>
                        <div className="rdt-row-value">
                            { racquet.specs[specKey[0]] }
                        </div>
                         
                    </div>
                )) 
               }    
            </div>
            <div className="ebayifi">
                <h3>Description for Ebay</h3>
                    {specsKeys.map( specKey => (
                        <div className="ebayifi-row" key={ specKey[2] }> 
                            { specKey[1] } : { racquet.specs[specKey[0]] }
                        </div>
                    ))
                    }
            </div>
        </div>
        
    );
} 
export default RacquetDetails;

export const racquetDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:8000/racquets/' + id);
    if (!res.ok) {
        throw Error('Could not find that career');
    }
    return res.json();
}

import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none" >
            
                <div className="card border">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center ">
                        <p className="card-text ">{item.title} </p>
                        <p>$ {item.price}</p>
                    </div>
                </div>
            
        </Link>
        
    )
}

export default Item;
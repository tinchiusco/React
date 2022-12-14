import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import { Theme } from "../../contexts/Theme";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ character }) => {

    const {addProduct} = useContext(Shop);
    const {themeColor} = useContext(Theme)

    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const navigate = useNavigate();

    const confirmPurchase = (quantity) => {
        addProduct({...character, quantity})
        setQuantityItemDetail(quantity);
    };

    const handleNavigate = () => {
      navigate('/cart')
    }

    return (
        <div className={ themeColor === "dark" ? "item-detail-dark" : "item-detail"} >
            <img src={character.image} width={700} alt="detail" />
            <div className="texts">
              <h1>{character.name}</h1>
              <p className="texts">{character.description}</p>
              {quantityItemDetail ? 
                <button onClick={handleNavigate}>Go cart</button>
              : 
                <ItemCount onAdd={confirmPurchase} initial={1} stock={character.quantity} />
              }
            </div>
        </div>
    );
};

export default ItemDetail;

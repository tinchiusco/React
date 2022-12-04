import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../contexts/Theme';
import './styles.scss'



const Item = ({product}) => {

  const navigate = useNavigate()

  const {themeColor} = useContext(Theme);

  const navigateDetail = () => {
    //Navegar hacia el detalle del producto
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div 
      onClick={navigateDetail} 
      className= { themeColor === "light" ? "card-detail" : "card-detail-dark" }
    >
      <img src={product.image} width={500} alt="game"/>
      <p key={product.id}>{product.name}, stock: {product.quantity}, Price: {product.price}</p>
    </div>
  )
}

export default Item
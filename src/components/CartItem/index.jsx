import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import TrashCanIcon from '../TrashCanIcon'
import './styles.scss'

const CartItem = ({item}) => {

  const {removeProduct} = useContext(Shop);

  const handleRemove = () => {
    removeProduct(item.id)
  }

  return (
    <div className='item'>
        <img src ={item.image} width={400} alt='cart-item'/>
        <h1>{item.name}</h1>
        <h2 className='item-quantity'>Number of items: {item.quantity}</h2>
        <div style={{width: 20}} onClick={handleRemove}>
          <TrashCanIcon />
        </div>
    </div>
  )
}

export default CartItem
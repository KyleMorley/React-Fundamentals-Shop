import BookingModal from "./BookingModal"
import Button from "./Button"
import {useState} from 'react'

const Cart = ({item, removeItem}) => {
    const [openModal, setIsOpen] = useState(false);

    return (
        <div className='container mt-4 p-4'>
            <h1 className='mt-4 mb-3 text-center'>Cart</h1> 
                <ul className='list-group'> 
                {
                    item.length <= 0 ? <h2 className='text-center mt-4'>Your Cart is Empty</h2> :
                    item.map(i => (
                        <li className='list-group-item w-100' key={i.id}>{i.title} <span><Button className='btn btn-dark cart-buy' text='Book Now' onClick={() => setIsOpen(!openModal)}/></span> <span className="cart-delete" onClick={ () => removeItem(i.id) }>X</span></li>
                    )) 
                }          
                </ul>
                {
                    openModal ? <BookingModal item={item} removeItem={removeItem}  closeModal={() => setIsOpen(!openModal)}/> : ''
                }
        </div>
    )
}

export default Cart

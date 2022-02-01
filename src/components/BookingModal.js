import {useState} from 'react';
import { toast } from 'react-toastify';
import Notification from './Notification';

const BookingModal = ({closeModal}) => {
    const [booking, setBooking] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const validateBooking = (e) => {
        e.preventDefault();

        if(name === '' || email === '') {
            toastError('Whoops, did you fill use the right details?')
        } else {
            userBooked();
        }
    }

    const userBooked = () => {
        setBooking(true);
        setTimeout(() => closeModal(), 2000);
    }

    const toastError = (text) => toast.error(text);

    return (

            <div className='modal-background'>
            <span className="close-modal" onClick={closeModal}>X</span>
            <div className='modal-container'>
                {
                    !booking ?
                    <form onSubmit={validateBooking}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Your Name" onChange={ e => setName(e.target.value) }/>
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                     </form> 
                     :
                     <h2 className='mt-2 text-center'>Email sent! Thank you for booking with us</h2>
                }    
                <Notification />
            </div>
        </div> 
    )
}

export default BookingModal
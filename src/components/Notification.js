import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
    return (
        <ToastContainer position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        />
    )  
}

export default Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notify = (stm,type) =>{
    if(type =="warn"){
        return toast.warn(stm);
    }
    if(type =="success"){
      return   toast.success(stm);
    }
    if(type =="error"){
        return   toast.error(stm);
      }    
} 
export default Notify; 
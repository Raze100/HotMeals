import React from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
import { useState ,useRef,useEffect} from 'react';
import Detail from "../screens/Detail"
import Modal from '../Modal';
export default function Card(props) {

  const [details,setDetails] = useState(false)
  // const navigate = useNavigate();
  
let dispatch = useDispatchCart();
let data = useCart();
const priceRef = useRef();

let options = props.options;
let priceOptions = Object.keys(options);
const [qty , setQty] = useState(1);
const [size , setSize] = useState("")

const handleAddToCart = async()=>{
  let food = []
  for(const item of data){
    if(item.id === props.foodItem._id){
      food = item;

      break; 
    }
  }

    if(food!==[]){
      if(food.size === size) {
        await dispatch({type:"UPDATE" , id:props.foodItem._id , price : finalPrice , qty: qty, img : props.foodItem.img})
        return
      }
    else if(food.size!== size){
      await dispatch({type:"ADD" , id:props.foodItem._id,name :props.foodItem.name,price :finalPrice,qty : qty, size : size  , img : props.foodItem.img})
      return
    }
    return 
  }
    await dispatch({type:"ADD" , id:props.foodItem._id,name :props.foodItem.name,price :finalPrice,qty : qty, size : size,img : props.foodItem.img})
  

}
let finalPrice = qty * parseInt(options[size]);
  useEffect(()=>{ setSize(priceRef.current.value) } , [])
  
  
  
  return (
    <div>
       <div>
        <div className="card  mt-4" style={{"width": "20rem" , "maxHeight":"400px"}}>
        <div className='btn bg- text-warning mx-2' onClick={()=>{setDetails(true)}}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}}/>
        <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
        
            
            <div className="container w-100">
            <div className='d-inline h-100 fs-5'> Rs {finalPrice}/-</div>
            </div>
            
          </div>
        
        </div>
        {details? <Modal  onClose={()=>setDetails(false)} ><Detail/></Modal>:null}
        <div className='container w-100'>
        <select className='m-3 h-100 w-40 bg-warning rounded'onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6),(e,i)=>{
                        return(
                            <option key={i+1} value={i+1}> {i+1} </option>
                )
                    })}
            </select>
            <select className='m-2 h-100 w-30 bg-warning rounded' ref = {priceRef} onChange={(e)=>setSize(e.target.value)}>
              {priceOptions.map((data)=>{
               return  <option key={data} value ={data}>{data}</option>
              })}
            </select>
        </div>

        <button className='btn bg-warning justfy-center 'onClick={handleAddToCart}>Add to Cart </button>
          
        </div>
      </div> 
    </div>
  )
}

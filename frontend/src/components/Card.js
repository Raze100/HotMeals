import React from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
import { useState ,useRef,useEffect} from 'react';
import Detail from "../screens/Detail"
import Modal from '../Modal';
import CardCSS from '../components/CardCSS.css'
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
          <div className="card-container">
              <div className='frame' onClick={()=>{setDetails(true)}}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." />
                  
                      <h5 className="card-title">{props.foodItem.name}</h5>
                      <div className='price'> Rs {finalPrice}/-</div>
                 
              </div>

              {details? <Modal  onClose={()=>setDetails(false)} ><Detail/></Modal>:null}
              
              <div className='selection'>
                <select className='selections 'onChange={(e)=>setQty(e.target.value)}>
                        {Array.from(Array(6),(e,i)=>{
                                return(
                                    <option key={i+1} value={i+1}> {i+1} </option>
                        )
                            })}
                </select>
                  <select className='selections ' ref = {priceRef} onChange={(e)=>setSize(e.target.value)}>
                    {priceOptions.map((data)=>{
                    return  <option key={data} value ={data}>{data}</option>
                    })}
                  </select>

                  <button className='addbtn' onClick={handleAddToCart}>Add to Cart </button>
              </div>
          </div>
        </div> 
    </div>
  )
}

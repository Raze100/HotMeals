import React , {useEffect, useState} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import logo from '../../src/logo-without-bg.png'
import axios from 'axios'
import HomeCSS from '../screens/HomeCSS.css'
export default function Home() {
  
  const [search , setSearch] = useState('');
  const [foodCat , setFoodCat] = useState([]);
  const [foodItem , setFoodItem] = useState([]);

  const loadData = async()=>{
    let response = await axios("https://hot-meals-rss7.vercel.app/api/foodData", {
      method:"GET",
      headers: {
        'Content-Type' : 'application/json'
      }
  });
  response = await response.json();

  console.log("response", response);
  setFoodItem(response[0]);
  setFoodCat(response[1]);
  // console.log(response[0] , response[1])
  }
  

  useEffect(()=>{
    loadData()
  },[])
  
  return (
    <div>
      <div className="static"><Navbar /></div>
      <div className="LandingPage bg-primary">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id='carousel'>
                    

                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                    <div><img  src={logo} className='opacity-25 img-rounded'width={500} height={500} />
                    <p className="text-white opacity-100 fs-2">HOTMEALS for U 😋</p></div> 
                        <div className="d-flex  jsutify-content-center">
                             
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange={(e)=>{setSearch(e.target.value)}} />
                            <button className="btn text-white bg-danger" onClick={() =>{setSearch('') }}>X</button>
                        </div>


                    </div>


                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/700x700/?burger" className="d-block w-100 h-550" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/700x700/?pastry" className="d-block w-100 h-550" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/700x700/?noodles" className="d-block w-100 h-550" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/700x700/?pasta" className="d-block w-100 h-550" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/700x700/?biryani" className="d-block w-100 h-550" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/700x700/?pizza" className="d-block w-100 h-550" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
        <div className='home-container'>
        {
          foodCat !== [] ? foodCat.map((data)=> {
            return (
              <div className='row  mb-3 '> 
                  <div key={data._id} className="fs-3 m-3">
                      {data.CategoryName}
                  </div>
                <hr className="line-tag" id="hr" style={{ height: "20px", backgroundImage: "-webkit-linear-gradient(left,brown,black" }}/>
                {foodItem !==[]
                ?
                foodItem.filter((item)=>item.CategoryName===data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                .map(filterItems =>{
                  return (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                      <Card foodItem = {filterItems}
                      options = {filterItems.options[0]}
                      //  imgSrc = {filterItems.img}
                      // description = {filterItems.description}
                      ></Card>
                    </div>
                  )
                }) 
                : 
                <div> "No such data found</div>}
              </div>
            )
          }) : ""
        } 
        
          
          </div>
      <div><Footer /></div>
    </div>
  );
}

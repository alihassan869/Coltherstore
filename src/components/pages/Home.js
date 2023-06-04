import React from 'react'
import Cardasdata from '../Cardasdata';
import Header from '../Header';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
const FaStar = <FontAwesomeIcon icon={faStar} />;
const FaStarHalf = <FontAwesomeIcon icon={faStarHalfStroke} />;;
function Home() {
  const getdata=useSelector((state)=>state.cartreducer.CARTS);
  const search = useSelector((state) => state.cartreducer.Search);
  // console.log('data and search is:',search )
  const datafilter = Cardasdata.filter((item) =>
  search.length > 0
    ? item.rname?.toLowerCase()?.includes(search?.toLowerCase())
    : true,
);
 
  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="row ">
        {
          datafilter.length > 0 ? 
          datafilter.map((item,id)=>{
  return (
    <>
       <Card style={{ width: '22rem' }} className='me-md-2 mb-2 mx-auto'>
      <Card.Body className='px-0 '>
      <Carousel fade className='w-100'>
      <Carousel.Item>
      <Link to={`/Detailpage/${item.id}`}>
      <img
          className="d-block w-100"
          src={item.imgdata}
          alt="First slide"
          style={{height:'400px'}}
        />  
         </Link>    
      </Carousel.Item>
     
      
      <Carousel.Item>
      <Link to={`/Detailpage/${item.id}`}>
        <img
          className="d-block w-100"
          src={item.imgdata2}
          alt="Second slide"
          style={{height:'400px'}}
        />  
        </Link>
    </Carousel.Item>
    
    
      <Carousel.Item>
      <Link to={`/Detailpage/${item.id}`}>
        <img
          className="d-block w-100"
          src={item.imgdata3}
          alt="Third slide"
          style={{height:'400px'}}
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
      <Link to={`/Detailpage/${item.id}`}>
        <img
          className="d-block w-100"
          src={item.imgdata5}
          alt="Third slide"
          style={{height:'400px'}}
        />
         </Link>
      </Carousel.Item> 
    </Carousel>
    <p>{item.rname}</p>
    <p>
       RS{item.price}
        </p>
        <p>S M L XL XXL</p>
      
        <div className="rating">
                <i className='text-primary'>{FaStar}</i>
                <i className='text-primary'>{FaStar}</i>
                <i className='text-primary'>{FaStar}</i>
                <i className='text-primary'>{FaStarHalf}</i>
                <b className='ms-1 text-primary'>{item.rating}</b>
              </div>
        
      </Card.Body>
    </Card>
    </>
    )
} 
): 
<div
                className="py-5 text-center text-red-800"
                style={{ minHeight: '80vh' }}
              >
                <h3>Items not found</h3>
              </div>}     
    </div>
    </div>
    <Footer/>
    
    </>
  )
}

export default Home
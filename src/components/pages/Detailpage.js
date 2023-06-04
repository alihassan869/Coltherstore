import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import Cardasdata from '../Cardasdata';
import Header from '../Header';
import Footer from '../Footer';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/actions/action';
import { style } from '@mui/system';
import { Form } from 'react-bootstrap';
import '../Detailpage.css'
function Detailpage() {
  const dispatch=useDispatch();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
const [size,setsize]=useState('S')
  const {id}=useParams();
  const [data,setdata]=useState([])
const compare=()=>{
  let comparedata = Cardasdata.filter((item) => {
    return item.id == id;
  });
  setdata(comparedata);
}
useEffect(()=>{
  compare();
},[id])
 const ADDITEM=(item)=>{
  if(size.length > 0){
    dispatch(ADD({...item, size}))
    alert('Item ADD') 
  }else{
    alert('Please Select  Size ')
  }
  
 }
  const sizeitem=(value)=>{
    setsize(value)
  
  }
  return (
    <>
    <Header size={size}/>
    <div className="container py-5">
      <div className="row">
        
        <div className="col-md-6 col-10 mx-auto mb-0 mb-md-2">
          {
            data.map((item,id)=>{
              return (
                <>
  <Carousel fade className='w-100'> 
     <Carousel.Item>
     <img
         className="d-block w-100"
         src={item.imgdata}
         alt="First slide"
         style={{height:'400px'}}
       />  
        
     </Carousel.Item>
    
     
     <Carousel.Item>
     
       <img
         className="d-block w-100"
         src={item.imgdata2}
         alt="Second slide"
         style={{height:'400px'}}
       />  
       
   </Carousel.Item>
   
   
     <Carousel.Item>
   
       <img
         className="d-block w-100"
         src={item.imgdata3}
         alt="Third slide"
         style={{height:'400px'}}
       />
      
     </Carousel.Item>
     <Carousel.Item>
    
       <img
         className="d-block w-100"
         src={item.imgdata5}
         alt="Third slide"
         style={{height:'400px'}}
       />
       
     </Carousel.Item> 
   </Carousel>
                </>
              )
              
            })
          }
      <div className="extra_img">
        {
 data.map((item)=>{
return (
  <>
  <div className="img-extra flex justify-around mt-2">
    <img src={item.imgdata2} alt="not found"  className='img-fluid cursor-pointer ' style={{height:'100px',width:'130px'}} onClick={() => setShow1(true)}/>
    <Modal
        show={show1}
        onHide={() => setShow1(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <img src={item.imgdata2} alt="not found"  className='img-fluid cursor-pointer ' />
        </Modal.Body>
      </Modal>
    <img src={item.imgdata3} alt="not found"  className='img-fluid  cursor-pointer' style={{height:'100px',width:'130px'}} onClick={() => setShow2(true)}/>
    <Modal
        show={show2}
        onHide={() => setShow2(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <img src={item.imgdata3} alt="not found"  className='img-fluid cursor-pointer ' />
        </Modal.Body>
      </Modal>
    <img src={item.imgdata4} alt="not found"  className='img-fluid  cursor-pointer' style={{height:'100px',width:'130px'}} onClick={() => setShow3(true)}/>
    <Modal
        show={show3}
        onHide={() => setShow3(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <img src={item.imgdata4} alt="not found"  className='img-fluid cursor-pointer ' />
        </Modal.Body>
      </Modal>
    <img src={item.imgdata5} alt="not found"  className='img-fluid cursor-pointer ' style={{height:'100px',width:'130px'}} onClick={() => setShow4(true)}/>
    <Modal
        show={show4}
        onHide={() => setShow4(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <img src={item.imgdata5} alt="not found"  className='img-fluid cursor-pointer ' />
        </Modal.Body>
      </Modal>
  </div>
  </>
)
 })
        }
       
      </div>
        </div>
        <div className=" col-md-6 col-10 mx-auto mb-0 mb-md-2">
          {
            data.map((item,index)=>{
             return(
              <>
               <h4>{item.rname}</h4>
              <b>RS{item.price}</b>
              <p>SKU: 0011827</p>
            <p>Design Number TS-0006-029</p>
            <Badge bg="dark">Slim Fit</Badge>
            <div className="size my-2 flex  justify-between">
              <div className="size-btn">
                {item.Size.map((ele,index)=>{
              return <button className={size === ele ? ' btn px-2 cursor-pointer me-2' :"px-2 cursor-pointer me-2 btn-style"} style={{border:'1px solid gray'}} onClick={()=>sizeitem(ele)}  >{ele}</button>
              }
              )}
              </div>
              <div className="size-guide cursor-pointer flex  " onClick={() => setShow(true)}>
              <svg className="icon icon--small icon--type-ruler" stroke-width="1" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style={{height:'30px'}}><path d="M14.93 4.11L12.1 1.28a1 1 0 00-1.41 0L6.8 5.17.78 11.18a1 1 0 000 1.42l2.82 2.82a1 1 0 001.42 0l9.9-9.9a1 1 0 000-1.4zm-10.6 10.6L1.48 11.9l1.41-1.41 1.06 1.06a.5.5 0 00.71-.71L3.61 9.77l1.42-1.42 1.05 1.06a.5.5 0 00.71-.7L5.73 7.65l1.42-1.42L8.2 7.3c.2.2.5.2.7 0s.2-.5 0-.7L7.85 5.53 9.27 4.1l1.06 1.06a.5.5 0 00.71-.7L9.98 3.4 11.39 2l2.83 2.83-9.9 9.9z"></path></svg>
              <p>Size Guide</p> 
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
         <img src="https://cdn.shopify.com/s/files/1/0011/4992/7436/files/mendeez-new-size-chart-final_1_2048x2048.png?v=1646226392" alt="not found" />
        </Modal.Body>
      </Modal>
            </div>
            <button className='py-2 bg-primary text-white w-100 my-2' onClick={()=>ADDITEM({
              id:item.id,
              imgdata:item.imgdata,
              name: item.rname,
              price:item.price,
              qnty:item.qnty
            })}>
              ADD TO CART
            </button>
            <hr></hr>
            <b>Description</b>
           <p>Our newly introduced Royal Henley t-shirt is the perfect combination of classic style and comfort with a three-button placket, giving you the option to wear it buttoned up for a polished look or unbuttoned for a more relaxed style. The soft and breathable fabric makes sure you stay cool and comfortable all day long, while the fabric’s stretch allows for ease of movement. If you are someone who is searching for some classic Henley t-shirts, then our Royal Henley T-shirt is sure to become your perfect choice.</p>
           
           <p>Fabric:
            Cotton Jersey</p>
           <p>Color: Navy Blue</p>
           <p>Size & Fit</p>
           <p>Model wears: M</p>
           <p>Height: 5’11 Feet</p><p>Weight: 74 Kg</p><p>Chest: 39</p><p>Waist: 30</p>
           
           <hr></hr>
              </>
             )
            })
          }
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Detailpage
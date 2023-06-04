import React ,{useState,useEffect }from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useForm } from 'react-hook-form';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { ADD,DLT,DLTONE ,Search} from '../redux/actions/action';
import { Link } from 'react-router-dom';
import cart from '../assests/2762885.png'
function Header({size}) {
  const dispatch=useDispatch();
  const { register, handleSubmit } = useForm();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [Price, setPrice] = useState(0);
  const getdata=useSelector((state)=>state.cartreducer.CARTS);
  const ADDITEM=(item)=>{
      dispatch(ADD(item))
        // alert('Item ADD')
     }
     
      // total price calculate
    const Total = () => {
      let price = 0;
      getdata.map((item, id) => {
        price = item.price * item.qnty + price;
      });
      setPrice(price);
    };
    useEffect(() => {
      Total();
    }, [Total]);
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="navbarScroll" className='ms-auto' />
        <Navbar.Collapse id="navbarScroll">
       
          <div className="search pt-4 pt-md-0" >
          <form
                onSubmit={handleSubmit((data) => {
                  if (data) {
                    // console.log(data)
                    dispatch(Search(data.search));
                  }
                })}
                className="search-box bg-primary-800 me-md-3 flex justify-between items-center"
                style={{border:'2px solid gray'}}
              >
                <input
                  type="text"
                  id="text-box"
                  {...register('search', { required: true })}
                  className="text-white ps-md-3 ps-0"
                  placeholder="Enter Product Name ....."
                />
                <button className="search-btn  py-2 ">
                  Search
                </button>
              </form>
          </div>
          <figure className='mx-auto ps-5 d-none d-lg-block'>
          <img src="https://cdn.shopify.com/s/files/1/0011/4992/7436/files/Mendeez_logo_520x200_9ba51bce-3205-4be0-8844-8b02dcbd0b20_280x.png?v=1645511237" alt="not found" style={{height:'65px',width:'100px'}} className='img-fluid  ' />
          </figure>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='text-white'>Account</Nav.Link>
            <Nav.Link> <Badge badgeContent={getdata.length} color="primary">
                <i
                  className="fa-solid fa-cart-shopping  cursor-pointer"
                  style={{ fontSize: '25px',color:'white' }}
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                ></i>
              </Badge>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {getdata.length ? (
                  <div className='px-5 '>
                    <Table >
                      <thead>
                        <tr>
                          <th>PHOTO                     
                          </th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody >
                        {getdata.map((item, id) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  <img
                                    src={item.imgdata}
                                    alt="not found"
                                    className="w-20 "
                                  />
                                </td>
                                <td>
                                  <p>{item.rname}</p>
                                  <p>RS{item.price}</p>
                                  <p>Size:{size}</p>
                                  <p>Quanity:{item.qnty}</p>
                                  <p className='text-primary'>
                                    <i
                                      className="fas fa-trash cursor-pointer  "
                                      onClick={() => dispatch(DLT(item))}
                                    ></i>
                                  </p>
                                  <div className="flex bg-primary justify-around items-center text-white">
                                    <span
                                      className="cursor-pointer"
                                      onClick={() => dispatch(DLTONE(item))}
                                    >
                                      -
                                    </span>
                                    <span className="cursor-pointer">
                                      {item.qnty}
                                    </span>
                                    <span
                                      className="cursor-pointer"
                                      onClick={()=>ADDITEM(item)}
                                    >
                                      +
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                        <p>Total:RS{Price}</p>
                      </tbody>
                    </Table>
                    <div className="w-full text-center">
                      <Link
                        to={`/Order/${Price}`}
                        className="text-white bg-primary text-decoration-none py-2 px-2  "
                      >
                        CHECK OUT
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div
                    className="flex justify-around items-center"
                    style={{ width: '20rem' }}
                  >
                    <h6 className="text-center uppercase text-red-800">
                      Your cart is Empty
                    </h6>
                    <figure>
                      <img src={cart} alt="not found" className="w-10 h-10" />
                    </figure>
                  </div>
                )}
              </Menu>
              </Nav.Link>
           
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
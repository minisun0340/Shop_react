import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import bg from './mainBg.png'
import {useState} from "react"
//import {a,b} from './data.js';
import {data,site} from './data.js';
import Product from './routes/product.js';

// 라우팅
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

// 컴포넌트
import Detail from './routes/detail.js';


function App() {

  let [shoes] = useState(data)
  let [imgSrc] = useState(site)
  let navigate = useNavigate();

  return (
    <div className="App">
        <Navbar bg="light"className='navBar' variant="light">
          <Container>
            <Navbar.Brand href="#home">MyProtein</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail')}}>상세페이지</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


        <Routes>
          <Route path="/" element={
            <>
              <div className='main-bg' style={{backgroundImage:'url('+bg+')'}}></div>
              <div className='container'>
                <div className='row'>
                  {
                    shoes.map((a, i)=>{
                      return(
                        <Product shoes = {shoes[i]} i={i+1}></Product>
                      )})
                  }
                </div>
              </div>
            </>
          }/>
          <Route path="/detail" element={
            <Detail 상품={shoes[1]}></Detail>
          }/>
          <Route path="/about" element={<div>about</div>}/>
          <Route path="*" element={<div>없는 페이지예요</div>}/>
        </Routes>

        
        {/* 상품 레이아웃 */}
        {/* <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <img width="80%" src='https://codingapple1.github.io/shop/shoes1.jpg'/>
              <h4>{shoes[0].title}</h4>
              <p>{shoes[0].price}</p>
            </div>
            <div className='col-md-4'>
            <img width="80%" src='https://codingapple1.github.io/shop/shoes2.jpg'/>
              <h4>{shoes[1].title}</h4>
              <p>{shoes[1].price}</p>
            </div>
            <div className='col-md-4'>
            <img width="80%" src='https://codingapple1.github.io/shop/shoes3.jpg'/>
              <h4>{shoes[2].title}</h4>
              <p>{shoes[2].price}</p>
            </div>
          </div>
        </div> */}
        {/* <div className='container'>
          <div className='row'> */}
        {/* {
          [1, 2, 3].map((a, i)=>{
            return(
                <div className='col-md-4'>
                  <img width="80%" src={imgSrc[i]} alt="상품이미지" />
                  <h3>{shoes[i].title}</h3>
                  <p>{shoes[i].price}</p>
                </div>
            )
          })
        } */}
        {/* {
          shoes.map((a, i)=>{
            return(
              <Product imgSrc={imgSrc[i]} shoes = {shoes[i]}></Product>
            )})
        } */}
{/* 
        {
          shoes.map((a, i)=>{
            return(
              <Product shoes = {shoes[i]} i={i+1}></Product>
            )})
        } */}
        
          </div>
    //     </div>
    // </div>
  );
}

export default App;

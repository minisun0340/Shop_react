function Product (props){
    return(
        <div className='col-md-4'>
            {/* <img width="80%" src={props.imgSrc} alt="상품이미지" /> */}
            <img width="80%" src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'}/>       
            <h3>{props.shoes.title}</h3>
            <p>{props.shoes.price}</p>
        </div>
    )
}

export default Product;
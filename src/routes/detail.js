function Detail(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.상품.title}</h4>
                <p>{props.상품.content}</p>
                <p>{props.상품.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;
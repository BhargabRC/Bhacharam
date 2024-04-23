import '../Style/singleproduct.scss'
import MyImage from "../components/MyImage";

export const SingleProduct = () => {

  const { id } = useParams();

  const {
    id: alias,
    name,
    price,
    description,
    image,
  } = SingleProduct;



  return (


    <Container className="container">
      <div className="grid grid-two-column">
        {/* product Images  */}
        <div className="product_images">
          <MyImage imgs={image} />
        </div>

        {/* product dAta  */}
        <div className="product-data">
          <h2>{name}</h2>

          <p className="product-data-price">
            MRP:
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p>{description}</p>

          <div className="product-data-info">
            <p>
              ID : <span> {id} </span>
            </p>
          </div>
          <hr />
          <Button className="btn">Add To Cart</Button>
        </div>
      </div>
    </Container>



  )
}


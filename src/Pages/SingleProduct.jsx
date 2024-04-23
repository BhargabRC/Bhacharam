import '../Style/singleproduct.scss'

export const SingleProduct = () => {

  const { id } = useParams();

  const {
    id: alias,
    name,
    price,
    description,
    image,
  } = SingleProduct;

  const MyImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);

    return (


      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <div className="grid grid-four-column">
              {imgs.map((curElm, index) => {
                return (
                  <figure>
                    <img
                      src={curElm.url}
                      alt={curElm.filename}
                      className="box-image--style"
                      key={index}
                      onClick={() => setMainImage(curElm)}
                    />
                  </figure>
                );
              })}
            </div>
            {/* 2nd column  */}

            <div className="main-screen">
              <img src={mainImage.url} alt={mainImage.filename} />
            </div>
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
}

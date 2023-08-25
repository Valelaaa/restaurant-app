import './product.scss'

export const Product = ({name, price, image}) => {
    return (
        <div className="product">
            <img className={"product-image"} src={image} alt="name"/>
            <h3 className={"product-name"}>{name}</h3>
            <div className="buy">
                <p className={"product-price"}>{price}</p>
                <div className="button">В корзину</div>
            </div>
        </div>
    )
}

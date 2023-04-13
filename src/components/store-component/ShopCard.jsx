import "./css/shopCard.css"

export default function ShopCard({ name, price, color, img }) {
	return (
		<div className="shop-card">
			<div className="shop-card__top">
				<h2 className="shop-card__title">{name}</h2>
				<h3 className="shop-card__color">{color}</h3>
			</div>
			<img src={img} alt={name} className="shop-card__img" />
			<div className="shop-card__bottom">
				<p className="shop-card__price">${price}</p>
				<button className="shop-card__add">ADD TO CART</button>
			</div>
		</div>
	)
}

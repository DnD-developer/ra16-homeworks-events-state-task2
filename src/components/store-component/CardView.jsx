import ShopCard from "./ShopCard"
import "./css/cardView.css"

export function CardView({ type, cardList }) {
	const classes = type === "list" ? "card-view list" : "card-view"

	return (
		<div className={classes}>
			{cardList.map(card => {
				return <ShopCard {...card} />
			})}
		</div>
	)
}

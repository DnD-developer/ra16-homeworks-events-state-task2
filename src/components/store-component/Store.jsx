import IconSwitch from "./IconSwitch"
import { CardView } from "./CardView"
import { useState } from "react"

export default function Store() {
	const [classSwitch, setClassSwitch] = useState("view_module")
	const [typeList, setTypeList] = useState("module")

	function onClickSwitchHandler() {
		const newClass = prev => {
			return prev === "view_list" ? "view_module" : "view_list"
		}

		const newType = prev => {
			return prev === "list" ? "module" : "list"
		}

		setClassSwitch(newClass)
		setTypeList(newType)
	}

	const productsData = [
		{
			name: "Nike Metcon 2",
			price: "130",
			color: "red",
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
		},
		{
			name: "Nike Metcon 2",
			price: "130",
			color: "green",
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
		},
		{
			name: "Nike Metcon 2",
			price: "130",
			color: "blue",
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
		},
		{
			name: "Nike Metcon 2",
			price: "130",
			color: "black",
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
		},
		{
			name: "Nike free run",
			price: "170",
			color: "black",
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
		},
		{
			name: "Nike Metcon 3",
			price: "150",
			color: "green",
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
		}
	]

	return (
		<>
			<IconSwitch icon={classSwitch} onSwitch={onClickSwitchHandler} />
			<CardView type={typeList} cardList={productsData} />
		</>
	)
}

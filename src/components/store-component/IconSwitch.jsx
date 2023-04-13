import "./css/iconSwitch.css"

export default function IconSwitch({ icon, onSwitch }) {
	const classes = "store__switch-btn material-icons"

	return (
		<div className="store__switch">
			<span onClick={onSwitch} className={classes}>
				{icon}
			</span>
		</div>
	)
}

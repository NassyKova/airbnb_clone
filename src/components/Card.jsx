export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                src={`./images/${props.coverImg}`}
                alt="swim"
                className="card--img"
            />
            <div className="card--stats">
                <img
                    src="images/Star.png"
                    alt="star"
                    className="card--star"
                ></img>
                <span>{props.stats.rating}</span>
                <span className="grey">
                    ({props.stats.reviewCount}) •{" "}
                </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From {props.price}$</span> / person
            </p>
        </div>
    );
}

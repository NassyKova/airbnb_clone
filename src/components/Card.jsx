export default function Card(props) {
    return (
        <div className="card">
            <img
                src={`./images/${props.img}`}
                alt="swim"
                className="card--img"
            />
            <div className="card--stats">
                <img
                    src="images/Star.png"
                    alt="star"
                    className="card--star"
                ></img>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <span className="bold">From {props.price}$</span> / person
            </p>
        </div>
    );
}

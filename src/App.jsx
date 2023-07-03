import "./style.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
    const cards = data.map((item) => {
        return (
            <Card
                key={item.key}
                // item={item} same as => in the app it would be props.item.openSpots
                // spread syntax
                {...item}
            />
        );
    });
    return (
        <>
            <NavBar />
            <Hero />
            <section className="card-list">{cards}</section>
        </>
    );
}

export default App;

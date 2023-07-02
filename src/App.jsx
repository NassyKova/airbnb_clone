import "./style.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
    const cards = data.map((item) => {
        return (
            <Card
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                key={item.key}
                openSpots={item.openSpots}
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

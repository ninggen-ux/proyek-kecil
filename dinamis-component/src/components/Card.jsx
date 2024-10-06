import CardItem from "./Card__item.jsx";
import cardData from "../json/card.json";

export default function Card() {
    const cardDataMap = cardData.map((item) => {
        return (
            <CardItem key={item.id} judul={item.judul} content={item.content} />
        );
    });

    return <div className="card">{cardDataMap}</div>;
}

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardItem(props) {
    return (
        <Link className="card__item" to="/card-item-dinamis">
            <h1>{props.judul}</h1>
        </Link>
    );
}

CardItem.propTypes = {
    judul: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

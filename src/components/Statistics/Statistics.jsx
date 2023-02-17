import PropTypes from "prop-types";
import css from "./statistics.module.css";

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && (<h2>{title}</h2>)}
            <ul>{stats.map(({id, label, percentage}) => {
                return <li key={id}>
                    <span>{label}</span>
                    <span>{percentage}</span>
            </li> })}</ul>
        </section>
    );
};
 

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}
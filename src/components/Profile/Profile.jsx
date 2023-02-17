
import PropTypes from "prop-types";
import css from "./profile.module.css";



export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    
    return (<div className={css.profile}>
        <div className={css.description}>
            <img className={css.userImg} src={avatar} alt={username} width="70"/>
            <p className={css.name}>{username}</p>
            <p className={css.tagName}>@{tag}</p>
            <p className={css.locationCity}>{location }</p>
        </div>
        <ul className={css.stats}>
            <li className={css.statsItem}><span className={css.label}>followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.statsItem}><span className={css.label}>views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.statsItem}><span className={css.label}>likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    </div>)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),

}

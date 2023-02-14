
import PropTypes from "prop-types";

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    
    return (<div>
        <div>
            <img src={avatar} alt={username} width="70"/>
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location }</p>
        </div>
        <ul>
            <li><span>followers</span>
                <span>{followers}</span>
            </li>
            <li><span>views</span>
                <span>{views}</span>
            </li>
            <li><span>likes</span>
                <span>{likes}</span>
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

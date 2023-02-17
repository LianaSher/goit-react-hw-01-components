import PropTypes from "prop-types";
import { Image, Item, List, Status, Name } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    
    return (<List>{friends.map(({ avatar, name, isOnline, id }) => {
        
        return <Item key={id}>
            <Status>{isOnline}</Status>
            <Image src={avatar} alt={name} />
            <Name>{name}</Name>

        </Item>
    })}</List>);
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
};
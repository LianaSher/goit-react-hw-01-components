import PropTypes from "prop-types";

import { FriendListItem } from "./FriendListItem";
import { Item, List } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
    
    return (<List>{friends.map(({id, avatar, name, isOnline}) => {
        
           return ( < Item key = {id} >
           
               <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </Item>)}
    )}</List>);
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
};

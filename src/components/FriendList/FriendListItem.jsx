import PropTypes from "prop-types";

import { Status, Image, Name } from "./FriendListItem.styled";

export const FriendListItem = ({ isOnline, avatar, name  }) => {
    
    return (<>
            <Status>{isOnline}</Status>
            <Image src={avatar} alt={name} width="70"/>
            <Name>{name}</Name>

        </>);
}

FriendListItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        
    };
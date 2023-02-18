
import PropTypes from "prop-types";
import { Card, Description, Image, Name, Tag, Location, List, Item, Label, Value } from "./profile.styled";



export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    
    return (<Card>
        <Description>
            <Image src={avatar} alt={username} width="70"/>
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location }</Location>
        </Description>
        <List>
            <Item><Label>followers</Label>
                <Value>{followers}</Value>
            </Item>
            <Item><Label>views</Label>
                <Value>{views}</Value>
            </Item>
            <Item><Label>likes</Label>
                <Value>{likes}</Value>
            </Item>
        </List>
    </Card>)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),

}

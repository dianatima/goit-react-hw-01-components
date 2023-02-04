import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}  
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
  };
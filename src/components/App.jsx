  // import user from '../user.json';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
// import { FriendListItem } from './FriendListItem/FriendListItem';
import { Statistic } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import user from 'data/user.json';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
        <FriendList friends={friends}>
          {/* <FriendListItem></FriendListItem> */}
        </FriendList>
      <TransactionHistory items={transactions} />
      </>
  
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};

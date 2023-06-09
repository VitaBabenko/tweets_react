import { useState } from 'react';
import { PutIncrementById } from '../../services/PutIncrementById';
import { PutDecrementById } from '../../services/PutDecrementById';
import picture from '../../images/picture.png';
import {
  TweetContainer,
  WrapImg,
  Img,
  Line,
  ImgUser,
  NameUser,
  TweetsNumber,
  FollowersNumber,
  BtnFollowing,
  Btn,
} from './UserListItem.styled';

export const UserListItem = ({
  oneUser: { id, user, tweets, followers, avatar, following },
}) => {
  const [newFollowers, setNewFollowers] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(following);

  const handleFollowing = tweetId => {
    PutIncrementById(tweetId, followers).then(resp => {
      setNewFollowers(prevState => prevState + 1);
      setIsFollowing(true);
      const users = JSON.parse(localStorage.getItem('users'));
      const index = users.findIndex(user => user.id === resp.id);
      const userFind = users.find(user => user.id === resp.id);
      userFind.followers = userFind.followers + 1;
      userFind.following = true;
      users.splice(index, 1, userFind);
      localStorage.setItem('users', JSON.stringify(users));
    });
  };

  const handleFollow = tweetId => {
    PutDecrementById(tweetId, followers).then(resp => {
      setNewFollowers(prevState => prevState - 1);
      setIsFollowing(false);
      const users = JSON.parse(localStorage.getItem('users'));
      const index = users.findIndex(user => user.id === resp.id);
      const userFind = users.find(user => user.id === resp.id);
      userFind.followers = userFind.followers - 1;
      userFind.following = false;
      users.splice(index, 1, userFind);
      localStorage.setItem('users', JSON.stringify(users));
    });
  };

  const numberWithDelimiter = number =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <TweetContainer>
        <WrapImg>
          <Img src={picture} alt="tweet" />
        </WrapImg>
        <Line />
        <ImgUser src={avatar} alt="avatar" />
        <NameUser>{user}</NameUser>
        <TweetsNumber>{tweets} tweets</TweetsNumber>
        <FollowersNumber>
          {numberWithDelimiter(newFollowers)} followers
        </FollowersNumber>
        {isFollowing ? (
          <BtnFollowing type="button" onClick={() => handleFollow(id)}>
            following
          </BtnFollowing>
        ) : (
          <Btn type="button" onClick={() => handleFollowing(id)}>
            follow
          </Btn>
        )}
      </TweetContainer>
    </>
  );
};

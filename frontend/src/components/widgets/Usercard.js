import React from 'react';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Usercard.styled';

export const Profile = ({ username, avatar, tag, location}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>1000</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>69</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>69</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};
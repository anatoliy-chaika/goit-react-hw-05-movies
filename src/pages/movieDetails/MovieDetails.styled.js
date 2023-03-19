import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Title = styled.p`
  font-size: 40px;
`;

export const Card = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 2px solid;
  margin-bottom: 10px;
  padding-bottom: 10px;
  padding: 10px;
  background-color: #f7feff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px;
  background-color: #bedadb;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const ListLink = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Info = styled.p`
  font-size: 20px;
  color: #e60a04;
`;

export const Overview = styled.p`
  font-size: 16px;
`;

export const Addition = styled.span`
  font-size: 25px;
`;

export const Buttons = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  background-color: #bedadb;
  margin-bottom: 10px;
  border-radius: 5px;
  &.active {
    color: white;
    background-color: orangered;
  }
`;

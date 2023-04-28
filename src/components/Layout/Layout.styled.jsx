import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wraper = styled.div`
maxWidth: 960;
margin: 0 auto; 
padding: 0 16px;

`
export const LinkWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`

export const StyledNav = styled(NavLink)`
display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  transition-property: color, background-color;
  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  &:hover,
  &:focus {
    transform: scale(2);
  }
`
export const FormField = styled.form`
width: 320px;
display: flex;
  row-gap: 15px;
  flex-direction: column;
  
`

import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/Contacts/Operations'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {StyledItem, StyledName} from "./ContactsItem.styled";

export const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <StyledName> {name}: </StyledName> <p>{number}</p>
      <Button variant="outlined" size="small" startIcon={<DeleteIcon /> }
      type="button" onClick={() => dispatch(deleteContact(id)) }>
        Delete
      </Button>
</StyledItem>
  );
};

import { useSelector } from "react-redux";
import { ContactsItem } from "components/ContactsItem/ContactsItem"; 
import { getContacts, getFilter} from 'redux/Contacts/selectors';
import { List} from "./ContactList.styled";
import Box from '@mui/material/Box';

export const ContactList = () => {
  
   const contact = useSelector(getContacts);
   const filter = useSelector(getFilter);

    const findContact = () => {
        const normalizedFilter = filter.toLowerCase();
        return contact.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
        );
        }
     
    const findFilterContacts = findContact();

    return (
        <Box sx={{ width: 600, border: '1px dashed blue', mt:4 }}>
            <List>
                {findFilterContacts.map(contact => 
                (<ContactsItem key ={contact.id} contact={contact}/>)
                     )}  
            </List>
        </Box>
    )
}
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

const Contacts=()=> {
return(
<div>
    <h2>Please, enter a name and phonenumber to add contact</h2>
    <ContactForm/>
    <h2>Contacts</h2>
    <Filter/>
    <ContactList/>
</div>
)
};

export default Contacts;
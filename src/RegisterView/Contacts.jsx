import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchContacts} from "redux/Contacts/Operations";
import { getIsLoading} from "redux/Contacts/selectors";

import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Loader } from "components/Loader/Loader";

const Contacts=()=> {

const isLoading = useSelector(getIsLoading);

const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

return(
<div>
    <h2>Please, enter a name and phonenumber to add contact</h2>
    <h2>Contacts</h2>
    <ContactForm/>
    {isLoading && <Loader />}
          <>
            <Filter />
            <ContactList />
          </>
</div>
)
};

export default Contacts;
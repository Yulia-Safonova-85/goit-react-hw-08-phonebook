import { Formik, Field, } from 'formik';
import * as Yup from 'yup';
import {FormField, Form,ErrorMessage} from './ContactForm.styled';
import { addContact } from 'redux/Contacts/Operations';
import { useDispatch,useSelector } from 'react-redux';
import { getContacts } from 'redux/Contacts/selectors';

import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {  Button }from '@mui/material';

const schema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required'),
number: Yup.number().positive('!!! > 0').required('Required'),
 });


export const ContactForm = () => {
const dispatch = useDispatch();
const contacts = useSelector(getContacts);

    const handleSaveContact = (values, actions) => {
        const normalizedName = values.name.toLowerCase();
        const findName = contacts.find(({name}) => name.toLowerCase() === normalizedName);

        if (findName) {
            return toast.info(`${values.name} is already in contact`, {
                position: toast.POSITION.TOP_CENTER
              });
           }
           dispatch(addContact(values));
           actions.resetForm();
      }
     
    return (
    <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={schema}
            onSubmit={handleSaveContact}>
        <Form>
            <FormField htmlFor="name">
                Name
            <Field
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required/>
                <ErrorMessage name="name" component="span"/>
                </FormField>

                <FormField htmlFor="number">Number
                    <Field type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required />
                    <ErrorMessage name="number" component="span" />
                </FormField>
                <Button variant="outlined" 
             type='submit'>Add contact</Button> 
        </Form>
        </Formik>
    )
}

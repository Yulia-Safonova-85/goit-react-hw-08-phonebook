import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
display:flex;
justify-content: center;
flex-direction: column;
gap: 20px;
width: 400px;
padding: 20px;
border: 1px solid darkblue;
border-radius: 8px;
`;


export const FormField = styled.label`
display:flex;
flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
color: tomato;
`;
import { useDispatch, useSelector } from "react-redux";
import {setFilterValue} from "redux/Contacts/FilterSlice";
import { getFilter } from "redux/Contacts/selectors";

import { Stack, TextField, Typography } from "@mui/material";


  export const Filter = () => {
 const dispatch = useDispatch();
 const filter = useSelector(getFilter);

const  changeFilter = evt => {
dispatch(setFilterValue(evt.target.value ));

  };

    return (
           <Stack
      component="form"
      sx={{
        width: '25ch',
      }} spacing={2}
      noValidate
      autoComplete="off"> 

            <Typography variant="h6">Find contacts by name </Typography> 
            <TextField
            label="Find"
            variant="outlined" 
            size="small"
            sx={{
              mr:'2rem'
            }}type="text" 
            name="filter" value={filter} 
            onChange={changeFilter}
            ></TextField>
          </Stack>
       
    )
};
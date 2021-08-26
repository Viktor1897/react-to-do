import React from 'react';
import {ListItemText, ListItem, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';
import EditForm from '../EditForm/EditForm';

const useStyles = makeStyles({
    listItem: {
        width: "100%",
        border: '1px solid #b1b1b180',
        borderRadius: '5px',
        marginBottom: '5px'
    }
  });

export default function PostListItem({title, description, onDelete, id }) {
    const { listItem } = useStyles();

    return (  
        <ListItem className={listItem}>
            <ListItemText primary={title} secondary={description} />
            <IconButton 
                color="secondary" 
                aria-label="delete" 
                component="span" 
                onClick={()=>onDelete(id)}>
                <DeleteIcon/>
            </IconButton>
            <EditForm 
                id={id}
                title={title}
                description={description}
            />
        </ListItem>
    )
}
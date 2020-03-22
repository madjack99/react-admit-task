import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <TextField source='username' />
      <EmailField source='email' />
      <TextField label='Company' source='company.name' />
    </Datagrid>
  </List>
);

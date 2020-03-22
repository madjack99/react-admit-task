import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <TextField source='username' />
      <EmailField source='email' />
      <UrlField label='Company' source='website' />
    </Datagrid>
  </List>
);

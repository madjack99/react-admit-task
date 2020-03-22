import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Filter,
  TextInput
} from 'react-admin';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput source='name' label='Search Name' alwaysOn resettable />
  </Filter>
);

export const UserList = props => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <TextField source='username' />
      <EmailField source='email' />
      <UrlField label='Company' source='website' />
    </Datagrid>
  </List>
);

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

import CustomUrlField from './CustomUrlField';

import './UserList.css';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput source='name' label='Search Name' alwaysOn resettable />
  </Filter>
);

const UserPanel = ({ id, record, resource }) => {
  const { lat, lng } = record.address.geo;
  return (
    <div
      style={{
        textDecoration: 'none',
        overflow: 'hidden',
        maxWidth: '100%',
        width: '600px',
        height: '400px'
      }}
    >
      <div
        id='gmapcanvas'
        style={{ height: '100%', width: '100%', maxWidth: '100%' }}
      >
        <iframe
          title={id}
          style={{ height: '100%', width: '100%', border: 0 }}
          frameBorder={0}
          src={`https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
        ></iframe>
      </div>
      <a
        className='codefor-googlemap'
        rel='nofollow'
        href='https://www.embed-map.com'
        id='grabmaps-authorization'
      >
        https://www.embed-map.com
      </a>
    </div>
  );
};

export const UserList = props => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid expand={<UserPanel />}>
      <TextField source='name' />
      <TextField source='username' />
      <EmailField source='email' />
      <CustomUrlField label='Company' source='website' />
    </Datagrid>
  </List>
);

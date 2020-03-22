import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import fakeRestProvider from 'ra-data-fakerest';
import data from './data';
import { UserList } from './UserList';

const dataProvider = fakeRestProvider(data, true);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={UserList} />
  </Admin>
);

export default App;

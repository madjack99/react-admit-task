import React from 'react';

function CustomUrlField({ record = {}, source }) {
  return <a href={record[source]}>{record.company.name}</a>;
}

export default CustomUrlField;

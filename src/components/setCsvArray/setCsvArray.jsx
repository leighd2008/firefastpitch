import React from 'react';

import { useState } from 'react';

const [csvArray, setCsvArray] = useState([]);

const processCSV = (str, delim = ',') => {
  const headers = str.slice(0, str.indexOf('\n')).split(delim);
  const rows = str.slice(str.indexOf('\n') + 1).split('\n');

  const newArray = rows.map(row => {
    const values = row.split(delim);
    const eachObject = headers.reduce((obj, header, i) => {
      obj[header] = values[i];
      return obj;
    }, {})
    return eachObject;
  })
  setCsvArray(newArray)
}
 
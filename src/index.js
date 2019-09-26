import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

ReactDOM.render(<Dashboard />, document.getElementById('root'));

var client_key = '<?=$client_key?>';
console.log("client_key   ======="+client_key);

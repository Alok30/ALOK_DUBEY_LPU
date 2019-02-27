const axios = require('axios')

var querystring = require('querystring');

axios.post('http://localhost:8000/v1/api/add-host/', querystring.stringify({ 
   'port_no':80,
   'host_name':'hostname43',
   'ip_address':'192.34.43.4'
 }));
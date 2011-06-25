/*
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 * limitations under the License.
 */

HOST = null; // localhost
PORT = 8081;

var http = require('http');

/*
 * Renders a page for HTTP requests
 */
var server = http.createServer(function(req, res){ 
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.end('<h1>Wave Gadget API Server</h1>'); 
});

var wave = require('wave').Server;
wave.attach(server, {"host":"127.0.0.1", "port":"6379", "clear":false});
server.listen(PORT, "127.0.0.1");
console.log('Server running at http://127.0.0.1:'+PORT); 


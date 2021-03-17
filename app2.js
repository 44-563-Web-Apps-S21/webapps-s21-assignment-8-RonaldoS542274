const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table><tr><th>Location</th>')
      res.write('<th>Hours</th>')
      res.write('<th>Money</th>')
      res.write('</tr>')
      res.write('<tr>') 
      res.write('<td>Taj mahal</td>')
      res.write('<td>five</td>')
      res.write('<td>&#36; 100</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>War fort</td>')
      res.write('<td>seven</td>')
      res.write('<td>&#36; 500</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Osman sagar</td>')
      res.write('<td>eight</td>')
      res.write('<td>&#36; 700</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Golcando fort</td>')
      res.write('<td>nine</td>')
      res.write('<td>&#36; 900</td>')
      res.write('</tr>')
      res.write('</table>')  
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})
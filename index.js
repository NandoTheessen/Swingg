const server = require('./App');
const { PORT } = process.env;

server.get('/', (req, res) => {
  res.send('api: running');
});

const port = PORT || 5000;

server.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
});
 
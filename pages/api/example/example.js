// EXAMPLE
const Timeline = [{ user: 1 }, { user: 2 }, { user: 3 }];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(Timeline));
};

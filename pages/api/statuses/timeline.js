const timeline = [
  {
    id: '0',
    avatar: 'http://kawala.in/assets/global/images/avatars/avatar3@2x.png',
    username: 'Matilda',
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: '1',
    avatar: 'http://kawala.in/assets/global/images/avatars/avatar11@2x.png',
    username: 'Franco1123',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Franco Garzon',
  },
  {
    id: '2',
    username: 'Devian11',
    name: 'Juan de la cruz',
    avatar: 'http://kawala.in/assets/global/images/avatars/avatar6@2x.png',
    message: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timeline));
};

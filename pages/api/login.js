export default function handler(req, res) {
    if (req.method === 'POST') {      
      const { username, password } = req.body;  
 
      const users = [
        { username: 'diva.audiansyah368@gmail.com', password: 'test@pkp' },
        { username: 'rizki.rahmasari@pkp.co.id', password: 'rizki.rahmasari' },
        { username: 'admin@admin.com', password: 'admin' },
      ];
  
      const isValidUser = users.some(user => user.username === username && user.password === password);
      if (isValidUser) {
        res.status(200).json({ message: 'Login berhasil' });
      } else {       
        res.status(401).json({ message: 'Login gagal. Username atau password salah.' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, nemo. At, fuga rerum corrupti itaque cum ipsa nemo possimus eius vitae culpa nobis, hic explicabo inventore pariatur laboriosam. Explicabo, laudantium?'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

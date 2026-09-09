const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const allowed = new Set(['index.html','styles.css','app.js','favicon.svg','archive-2026-08.html']);
http.createServer((req,res)=>{const file = new URL(req.url,'http://localhost').pathname.slice(1)||'index.html';if(!allowed.has(file)){res.writeHead(404);return res.end('Not found');}res.setHeader('Content-Type',({'html':'text/html; charset=utf-8','css':'text/css','js':'text/javascript','svg':'image/svg+xml'})[file.split('.').pop()]);res.end(fs.readFileSync(path.join(__dirname,file)));}).listen(4173,'127.0.0.1',()=>console.log('TRIAXIS preview http://127.0.0.1:4173'));

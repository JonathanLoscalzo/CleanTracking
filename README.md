- buildear el proyecto 
npm run build:production:hx

- copiar la carpeta build al servidor con winscp

- buildear la imagen de docker
sudo docker build -f nginx.dockerfile -t webapp_cleantracking .

- correr la imagen
sudo docker run -d -p 4001:80 webapp_cleantracking

-si ya existe la imagen: 
sudo docker stop <imagen>
sudo docker rm <imagen>
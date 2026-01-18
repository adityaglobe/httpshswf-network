# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# on ubuntu 
apt update -y
# install docker on ubuntu 
apt install docker.io -y
## run on docker 
git clone https://github.com/adityaglobe/httpshswf-network.git
# build docker image 
docker build --no-cache -t httpshswf-network .
# run docker container 
docker run -d -p 8080:80 --name httpshswf-network-app httpshswf-network
# not access http://<EC2_PUBLIC_IP:8080 
<img width="1919" height="1079" alt="Screenshot 2026-01-18 154900" src="https://github.com/user-attachments/assets/ce634e5b-e550-4b93-bc59-bb09e23f07ff" />

# for Kubernetes
kubectl apply -f deployment.yml
kubectl apply -f service.yml
kubectl get deployments
kubectl get pods
kubectl get svc
# Access Your Application
http://<NODE_IP>:30080


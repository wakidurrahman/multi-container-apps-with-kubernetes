# Multi Container Apps With Kubernetes

Build a complex multi-container application from scratch and deploy it to AWS
   s
## Setting Frontend application

1. To start a new Create React App project with TypeScript, you can run:

```
npx create-react-app frontend --template typescript
```

2. Install Tailwind CSS with Create React App

```
cd frontend
npm install -D tailwindcss
npx tailwindcss init
```

3. Adding a Sass Stylesheet

```
npm install sass

```

## kubectl

### Object types

- [x] pods
- [x] Deployment
- [x] services
   - clusterIp
   - NodePort
   - LoadBalancer
   - Ingress
- [x] secrets
   - `$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=1234567`

- Object type "secret" create command

```$ kubectl create secret generic pgpassword --from-literal PGPASSWORD=123Sddb```

### Builds and pushes to the Docker Hub repository CI.

```
.github/workflows/builds-and-push-to-dockerhub.yml

name: Builds and pushes to the Docker Hub repository CI
run-name: Push Docker image to Docker Hub.
on:
  push:
    branches: ["main"]
   ............
   ............
   ............
```
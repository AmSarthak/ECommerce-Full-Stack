🛒 Dukaan – Scalable E-Commerce Platform
Dukaan is a full-stack eCommerce application built with a polyglot microservices architecture.

The project demonstrates real-world system design concepts, including service separation, containerization, and orchestration using Docker and Kubernetes.

🖥 Frontend

React
Axios
Functional Components + Hooks

🔧 Backend Services

1️⃣ Inventory Service

Node.js
Express
REST APIs
In-memory / service-managed inventory

2️⃣ Order / Core Backend

Spring Boot
JDBC (No ORM abstraction)
MySQL
REST APIs
Invoice Download in PDF format

🗄 Database
MySQL

📦 DevOps

Docker
Docker Compose
Kubernetes (Pods, Services, Deployments)


🧠 Engineering Highlights

Polyglot backend (Node + Java)

Clean separation of services

JDBC used intentionally to understand low-level DB interaction

Containerized architecture

Kubernetes orchestration

Microservice communication via REST

Backend-to-service dependency management

📈 Why This Project?

This project was built to:
  Understand full-stack system design
  
  Practice real-world backend communication
  
  Learn Docker & Kubernetes hands-on
  
  Implement database interaction without ORM abstraction
  
  Simulate production-like service architecture

DOCKER COMMANDS:

#INVENTORY
docker build -t inventory-app .
docker run -p 3000:3000 inventory-app

#FRONTEND

docker build -t frontend-app .
docker run -p 3001:80 frontend-app

#BACKEND


#COMPLETE APP

In root folder ->

docker compose up --build 
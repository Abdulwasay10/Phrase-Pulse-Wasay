
# Phrase Pulse - DevOps Pipeline Setup

This repository contains the source code for the Phrase Pulse project and the configuration for its automated CI/CD pipeline using Jenkins and Docker.

## Overview

This project demonstrates the implementation of a CI/CD pipeline to automate the building, testing, and deployment of the Phrase Pulse web application. The pipeline is configured to automatically pull changes from the GitHub repository, build a Docker image, and deploy the application on a server.

## Pipeline Setup

### Prerequisites

- **Jenkins** installed and configured on your server.
- **Docker** installed on the server where Jenkins is running.
- A **GitHub** repository with the application source code.

### Step 1: Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/Abdulwasay10/Phrase-Pulse-Wasay.git
```

### Step 2: Jenkins Pipeline Configuration

1. **Access Jenkins:** Log in to your Jenkins instance.
2. **Create a New Pipeline:** 
   - Go to `New Item`, select `Pipeline`, and give it a name (e.g., `Phrasepipeline`).
   - In the Pipeline section, choose to define the pipeline script from SCM and select Git.
   - Enter the repository URL: `https://github.com/Abdulwasay10/Phrase-Pulse-Wasay.git`.

3. **Pipeline Script:**
   Add the following Jenkins pipeline script (`Jenkinsfile`) to your repository:

   ```groovy
   pipeline {
       agent any
       stages {
           stage('Checkout') {
               steps {
                   git 'https://github.com/Abdulwasay10/Phrase-Pulse-Wasay.git'
               }
           }
           stage('Build') {
               steps {
                   script {
                       docker.build('phrase-pulse')
                   }
               }
           }
           stage('Deploy') {
               steps {
                   script {
                       docker.image('phrase-pulse').run('-d -p 3000:3000')
                   }
               }
           }
       }
   }
   ```

### Step 3: Docker Setup

1. **Dockerfile:**
   Ensure you have a `Dockerfile` in the root of your repository with the following content:

   ```Dockerfile
   # Use an official Node.js runtime as a parent image
   FROM node:14

   # Set the working directory to /app
   WORKDIR /app

   # Copy the current directory contents into the container at /app
   COPY . /app

   # Install any needed packages
   RUN npm install

   # Make port 3000 available to the world outside this container
   EXPOSE 3000

   # Run the app
   CMD ["npm", "start"]
   ```

2. **Build and Run the Docker Container:**
   Jenkins will automatically build the Docker image and run the container as part of the pipeline.

### Step 4: Running the Pipeline

1. **Trigger the Pipeline:**
   - After pushing the code to the repository, the pipeline will automatically trigger in Jenkins.
   - Jenkins will pull the latest code, build the Docker image, and deploy the application.
```
![image](https://github.com/user-attachments/assets/bb7810aa-4785-4b36-8f58-1e8c933a899d)
```

2. **Access the Application:**
   - Once the pipeline is complete, the application will be running and accessible on the server at `http://<server-ip>:3000`.
```
![image](https://github.com/user-attachments/assets/a976929a-d185-4730-981f-b8ade0e0d66f)
```

### Troubleshooting

- **Port Conflict:** If the pipeline fails during the deployment stage with an error about port 3000 being already in use, ensure no other processes are running on that port.

- **Docker Issues:** If there are issues with Docker, ensure Docker is installed correctly and that Jenkins has permission to execute Docker commands.

## Conclusion

This pipeline setup automates the process of deploying the Phrase Pulse application, ensuring continuous integration and continuous deployment. The use of Docker guarantees consistent environments across different stages of development and production.

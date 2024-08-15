pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Abdulwasay10/Phrase-Pulse-Wasay.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    // If your Dockerfile is not in the root directory, specify the path like this:
                    // docker.build('phrase-pulse', './path-to-dockerfile-directory')
                    docker.build('phrase-pulse')
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Ensure nothing is running on port 3000 before this step
                    docker.image('phrase-pulse').run('-d -p 3000:3000')
                }
            }
        }
    }
}

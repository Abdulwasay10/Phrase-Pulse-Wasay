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

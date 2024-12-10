pipeline {
    agent any 

    // environment {
    //     NODEJS_HOME = tool 'NodeJS 16' // Adjust to your Node.js version in Jenkins
    //     PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    // }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/YodaheZegeye/docker_image_generator.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies'
                    // sh 'npm install'
                }
            }
        }

        stage('Build Angular App') {
            steps {
                script {
                    echo 'Building angular app'
                    // sh 'npm run build --prod'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building Docker Image'
                    // def app = docker.build("your-dockerhub-username/angular-node-app:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    echo 'Pushing Docker Image'
                    // docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials-id') {
                    //     app.push()
                }
            }
        }
    }
    

    post {
        success {
            echo 'Docker image built and pushed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
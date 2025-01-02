pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    environment {
        DOCKER_HOST = 'unix:///var/run/docker.sock'
    }
    stages {
        stage('Display Environment Variables') {
            steps {
                script {
                    echo "DOCKER_HOST: ${env.DOCKER_HOST}"
                }
            }
        }
        
        stage('Debug Workspace') {
            steps {
                script {
                    sh 'ls -l'
                }
            }
        }

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/YodaheZegeye/docker_image_generator.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies'
                    sh '''
                    if [ -d "node_modules" ]; then
                        echo "Using cached node_modules"
                    else
                        echo "Installing node_modules"
                        npm install
                    fi
                    '''
                }
            }
        }

        stage('Build Angular App') {
            steps {
                script {
                    echo 'Building Angular app'
                    sh '''
                    echo "Starting Angular build"
                    npm run build
                    echo "Angular build completed"
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Building Docker image'
                    def imageName = "angularyodahe"
                    def imageTag = "latest"
                    sh '''
                    echo "Starting Docker build"
                    unset DOCKER_TLS_VERIFY
                    unset DOCKER_CERT_PATH
                    docker build -t angularyodahe:latest .
                    echo "Docker build completed"
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    echo 'Pushing Docker image to Docker Hub'
                    def registry = "index.docker.io"
                    def imageName = "angularyodahe"
                    def imageTag = "latest"
                    
                    withDockerRegistry([credentialsId: 'yodahezegeye-dockerhub', url: "https://${registry}"]) {
                        sh '''
                        echo "Tagging Docker image"
                        docker tag ${imageName}:${imageTag} ${registry}/${imageName}:${imageTag}
                        echo "Pushing Docker image"
                        docker push ${registry}/${imageName}:${imageTag}
                        echo "Docker image pushed successfully"
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully: Docker image built and pushed!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for details.'
        }
    }
}

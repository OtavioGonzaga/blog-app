node("${NODE_LABEL}") {
    stage ('Checkout') {
        checkout scm
    }

    stage ('Build') {
        sh """
            docker build -m 3g -t ${PROJECT_NAME}:B${BUILD_NUMBER} \
                --build-arg VITE_KEYCLOAK_URL=${VITE_KEYCLOAK_URL} \
                --build-arg VITE_KEYCLOAK_REALM=${VITE_KEYCLOAK_REALM} \
                --build-arg VITE_KEYCLOAK_CLIENT_ID=${VITE_KEYCLOAK_CLIENT_ID} \
                --build-arg VITE_API_URL=${VITE_API_URL} \
                -f Dockerfile .
        """
    }

    stage ('Deployment') {
        try {
            sh "docker stop ${PROJECT_NAME}"
            sh "docker rm ${PROJECT_NAME}"
        } catch (Exception e) {
            sh "echo 'container not running'"
        }
        sh "docker run -d --name ${PROJECT_NAME} -p ${PORT}:80 ${PROJECT_NAME}:B${BUILD_NUMBER}"
    }
}
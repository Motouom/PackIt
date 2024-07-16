# PackIt
Welcome to the PackIt project! PackIt is a Link Shortener application build with mordern tech stack.


### Prerequisites
Make sure you have the following installed:
- [Java 11+](https://adoptopenjdk.net/): Programming Language and runtime environment.
- [Node.js 14+](https://nodejs.org/): Javascript runtime environment.
- [Docker](https://www.docker.com/): A platform to build, share, and run applications in containers.
- [Git](https://git.scm.com/): Version control system for tracking changes in source code, facilitating collaboration and version management.


## Installation
Follow the steps below to set up a local environment:

1. Install nvm:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```

2. Install Node.js using nvm:
    ```bash
    nvm install node
    ```
3. Install sdkman
    ```bash
    curl -s "https://get.sdkman.io" | bash
    ```

4.Install Java and Gradle using sdkman:
   ```bash
   sdk install java
   sdk install gradle
   ```

## Getting Started
To run the PackIt project locally, follow these steps:

##### Clone the repository
Firstly, clone the repository to your local machine:
    ```bash
    git clone https://github.com/Motouom/PackIt.git
    cd packit
    ```

#### Backend Setup
Navigate to the `backend` directory and set up the Spring Boot application: 

1. Nagative to the backend directory:
    ```bash
    cd backend
    ```
    
2. Build the project with Gradle:
    ```bash
    ./gradlew build
    ```

3. Run the application:
    ```bash
    ./gradlew bootrun

#### Frontend 
1. Navigate to the frontend repository:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3.Start the development server:
    ```bash
    npm run dev
    ```

## Running the Application

#### Using Docker
1. Build the docker image:
    ```bash
    docker-compose build
    ```

2. Start the Services:
    ```bash
    docker-compose up
    ```

3. Access the application:
    - Backend API: `http://localhost:8080`
    - Frontend: `http://localhost:3000`
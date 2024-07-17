# Use the GraalVM base image
FROM ghcr.io/graalvm/graalvm-ce:22.3.2 AS builder

# Set the working directory
WORKDIR /app 


# Copy the Gradle wrapper
COPY gradlew ./
COPY gradle ./gradle  

# Copy the application code
COPY . . 

# Build the application with Gradle
RUN ./gradlew clean build

# Use the lightweight Distroless base image
FROM gcr.io/distroless/java17:nonroot

# Copy the built JAR file from the builder stage
COPY --from=builder /app/build/libs/*.jar /app/application.jar

# Set the entry point
ENTRYPOINT ["java", "-jar", "/app/application.jar"]
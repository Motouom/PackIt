# PackIt Overview

PackIt is a multiplatform application design to create short customised and memorable URLs which redirects to  long combersome URLs.


## Technolgies used for the PackIt backend

1. Programing Language: 
    Kotlin is a modern statically typed general purpose high-level programing language with type inferance. It is the main language used for developing the packIt backend.


2. Framework: Spring boot 
    Spring boot is an open source java based framework used to build micro services


3. Datatabase and ORM: postgresql and Spring data R2DBC
    PostgreSQL is an opensource relational database that supports both spl and json querying. 
    Spring data R2DBC allows for java programs to connect to postgresql database using standard dabase independent code.

4. API Documentation tool:  springdoc OpenAPI 
    Springdoc OpenAPI is a java library that helps to generate API documentstion using springboot projects.
    It automatically generates Api-documentation in JSON/YAML format and this documentation can be completed by using swagger annotations in conntroller or api files.

5. Other technologies
    
    - Webflux
         This is a reactive non-blocking web framework. 
    
    - kotlin coroutines
         This is a kotlin language feature that simplifies asynchronius programing and concureent execution. Kotlin coroutines provide a way to write non-blocking code that is more readable and maintanable.
    
    
    - Spring native (graalvm)
         Spring native provides support for compiling spring applications to native executables using the graalVM native-image compile


## PackIt Architechture 

This simply explains how PackIt behaves on a structural level. This uses the layered architecture.

- Presentation Layer:

    PackItShortenerController: This is the entry point of the application, handling the incoming HTTP requests and exposing the API endpoints for URL shortening, analytics, and QR code generation.
    GlobalExceptionHandler: This component is responsible for handling and providing meaningful error responses for any exceptions that may occur in the application.

- Service Layer:

    PackItShortenerService: This is the core business logic layer of the PackIt application, responsible for handling the URL shortening, analytics tracking, and QR code generation.
    PackItAnalyticsService: This service is responsible for tracking the clicks and retrieving the analytics data for a given shortened URL.

- Repository Layer:

    PackItRepository: This repository interface, implemented using Spring Data R2DBC, provides the abstraction for interacting with the PostgreSQL database to store and retrieve URL data.

- Database Layer:

    PackItData: This is the data class representing the URL data stored in the PostgreSQL database.
    AnalyticsData: This is the data class representing the analytics data stored in the PostgreSQL database.




## PackIt System components 


    PackItApplication:
        This is the main entry point of the application, where the main() function is located.
        It is responsible for bootstrapping the Spring WebFlux application context.

    WebFluxConfig:
        This component is responsible for configuring the Spring WebFlux application context.
        It sets up the necessary web-related beans and configurations, such as the RouterFunction for handling the API endpoints.

    ShortenerController:
        This is the main web controller that handles the incoming HTTP requests for URL shortening, analytics, and QR code generation.
        It defines the API endpoints and maps them to the corresponding service methods.
        It also handles any exceptions that may occur during the request processing and delegates them to the GlobalExceptionHandler.

    ShortenerService:
        This is the core business logic component that handles the URL shortening, analytics tracking, and QR code generation.
        It interacts with the LinkRepository to perform the required operations.

    LinkRepository:
        This is the data access layer component that provides an abstraction for interacting with the PostgreSQL database using Spring Data R2DBC.
        It defines the repository interface and handles the CRUD (Create, Read, Update, Delete) operations for the LinkData entity.

    AnalyticsService:
        This component is responsible for tracking the clicks and retrieving the analytics data for a given shortened URL.
        It interacts with the LinkRepository to get the necessary data and AnalyticsService to calculates the analytics metrics.

    LinkData:
        This is the data class representing the URL data stored in the PostgreSQL database.
        It includes the fields for the short URL, long URL, and the creation timestamp.

    AnalyticsData:
        This is the data class representing the analytics data stored in the PostgreSQL database.
        It includes the fields for the short URL, click count, ip address, OS version, geographical lacation etc.

    GlobalExceptionHandler:
        This component is responsible for handling and providing meaningful error responses for any exceptions that may occur in the application.
        It defines the exception handling logic and the structure of the error response.

    ErrorResponse:
        This is the data class representing the structure of the error response returned by the GlobalExceptionHandler.
        It includes the error message and the HTTP status code.

## PackIt Class diagram
```mermaid
classDiagram
	direction TB
    PackItApplication  --  WebFluxConfig
    ShortenerController  --  ShortenerService
    ShortenerService  --  LinkRepository
    ShortenerService  --  AnalyticsService
    LinkRepository  --  LinkData
    WebFluxConfig -- GlobalExceptionHandler 
    AnalyticsController -- AnalyticsService
    AnalyticsService  --  AnalyticsRepository
    WebFluxConfig -- AnalyticsController
    AnalyticsRepository -- AnalyticsData
    WebFluxConfig  --  ShortenerController
    GlobalExceptionHandler -- ErrorResponse

    class PackItApplication {
        +main(args: Array~String~): Unit
    }

    class WebFluxConfig {
        +configureWebFlux(builder: WebFluxConfigurer): Unit
    }

    class ShortenerController {
        +shortenUrl(longUrl: String)
        +getQrCode(shortUrl: String)
    }
    
     class AnalyticsController {
        +getAnalytics(shortUrl: String)
        
    }

    class ShortenerService {
        +shortenUrl(longUrl: String): String
        +getAnalytics(shortUrl: String): AnalyticsData
        +getLinkdescription(shortlink: String): Description
        +getDateCreated(shortlink: Date): DateCreated
        +generateQrCode(shortUrl: String): ByteArray
    }

    class LinkRepository {
        +save(urlData: UrlData)
        +findByShortUrl(shortUrl: String)
    }
    class AnalyticsRepository {
        +save(urlData: UrlData)
        +findByShortUrl(shortUrl: String)
    }

    class AnalyticsService {
        +trackClick(shortUrl: String)
        +getAnalyticsData(shortUrl: String)
    }

    class LinkData {
        +id: Long
        +shortUrl: String
        +longUrl: String
        +description: String
        +createdAt: Instant
    }

    class AnalyticsData {
        +id: Long
        +shortUrl: String
        +clicks: Long
        +ipAddress: InetAddress
        +osVersion: String
        +GeographicalLocation: String
        +lastVisited: Instant
    }

    class GlobalExceptionHandler {
        +handleException(e: Exception): ResponseEntity~ErrorResponse~
    }

    class ErrorResponse {
        +message: String
        +status: Int
    }
   ```


## Database schema of PackIt

This explains the various tables in the PackIt database. There are basically two tables here which are the link_data table and the analytics_data table.
- link_data table: This table stores all data related to the each URL including 
    - link_id
    - long_link
    - short_link
    - description (or link topic)
    - date_created

- anlytics_data table
    - id(primary key)
    - short_link ( foreing key fro link_data table)
    - number_of_clicks
    - ip_address
    - browser
    - os_version
    - geographical_location

## PackIt API Documentation


   1. Create Short URL
        Endpoint: POST /api/v1/links
        Description: This API creates a new shortened URL and stores the mapping between the short URL and the original long URL in the link_data table.
        Request Body: The original long URL to be shortened.
        Response: The generated short URL.

  2. Redirect to Original URL
        Endpoint: GET /api/{shortlink}
        Description: This API takes the short URL as a path parameter, looks up the corresponding long URL in the url_data table, and redirects the user to the original long URL.
        Request Parameters: The short URL to be redirected.
        Response: A redirection to the original long URL.

  3. Get URL Analytics
        Endpoint: GET /api/v1/links/{shortlink}/analytics
        Description: This API retrieves the analytics data (click count,ip address, osVersion, geographical location and last visited timestamp) for the given short URL from the analytics_data table.
        Request Parameters: The short URL to retrieve the analytics for.
        Response: The analytics data for the specified short URL.

  4. Manage links
        Endpoint: GET /api/v1/alllinks
        Description: This API retrieves a list of all the shortened URLs, along with their creation timestamps, from the link_data table.
        Response: A list of all the shortened URLs and their creation timestamps.

    
  5. Customize Short URL
        Endpoint: PUT /api/v1/urls/{shortUrl}
        Description: This API allows the user to customize the existing short URL. It updates the short_link column in the link_data table with the new custom short URL, and also updates the corresponding short_link column in the analytics_data table.
        Request Parameters:
            {shortlink}: The existing short URL that the user wants to customize.
        Request Body:
            new_short_link: The new custom short URL the user wants to use.
        Response: The updated short URL.


   6. Delete a Short URL
        Endpoint: DELETE /api/v1/urls/{shortUrl}
        Description: This API deletes the specified short URL, along with its corresponding data in the link_data and analytics_data tables.
        Request Parameters: The short URL to be deleted.
        Response: A success message indicating the short URL has been deleted.



## Testing
This section explains the the different strategies that can be implemented to properly test the PackIt application. 


    Unit Tests:
        Write unit tests for your individual components, such as the controller, service, and repository classes.
        Use a testing framework like JUnit and Mockito to mock dependencies and isolate the unit under test.
        Verify the behavior of each method, including edge cases and error handling.

    Integration Tests:
        Write integration tests to verify the end-to-end functionality of our application.
        Test the interaction between the controller, service, and repository layers.
        Use an in-memory database H2 or a test container (e.g., TestContainers) to simulate the PostgreSQL database during testing.

    API Tests:
        Write tests to verify the behavior of your API endpoints.
        Use a testing framework like SpringBootTest or WebTestClient to make HTTP requests to your API and assert the expected responses.
        Test various scenarios, including successful requests, error cases, and edge cases.

    Database Integration Tests:
        Verify the correct interaction with the PostgreSQL database using Spring Data R2DBC.
        Test CRUD operations on the link_data and analytics_data tables.
        Ensure data integrity, consistency, and correct handling of database-related exceptions.

    Performance Tests:
        Evaluate the application's performance under load, especially for the URL redirection endpoint.
        Use tools like JMeter or Gatling to simulate concurrent user requests and measure metrics like response time, throughput, and error rate.
        Identify and address any performance bottlenecks.

    Security Tests:
        Validate the application's security measures, such as input validation and sanitization.
        Check for common web application vulnerabilities, like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).
        Use tools like OWASP ZAP or Burp Suite to assist in the security testing process.

    Acceptance Tests:
        Write end-to-end tests that simulate user interactions and verify the expected outcomes.
        Use a behavior-driven development (BDD) approach, such as Cucumber, to define and execute these tests.

    Monitoring and Logging Tests:
        Use the kotlin sfl4j wrrapper,the kotlin wrapper for logging in the PackIt backend.
        Verify that the application's logging and monitoring mechanisms are working as expected.
        Ensure that errors, warnings, and important events are correctly logged and can be accessed for troubleshooting.
        Test the integration with any monitoring or alerting tools used in your deployment environment.




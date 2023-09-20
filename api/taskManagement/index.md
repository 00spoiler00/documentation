# Asynchronous Task Management API 

## Summary

Welcome to a versatile platform designed to streamline the handling and management of asynchronous tasks. This robust API is a cornerstone in automating and orchestrating task workflows, fostering enhanced operational efficiency.

You can seamlessly create tasks either directly through the API or have them generated via various other flows. These tasks are then accessible and manageable through this comprehensive API interface, providing a cohesive and integrated task management experience.

## Integration and notification mechanisms

The API offers flexibility in task monitoring through two primary mechanisms: polling and event-driven notifications through customer-provided callbacks.

- **Polling**: A straightforward method where you periodically check and retrieve the status and details of tasks.
- **Customer-Provided Callbacks**: A dynamic approach that facilitates real-time notifications to designated URLs (provided by the customer), triggered by specified task or event types. This mechanism enhances the interoperability and real-time responsiveness of your systems, making it a preferred choice for modern, event-driven architectures.
Whether you are aiming to integrate with complex workflows, set up automated notifications, or streamline task management, this API serves as a one-stop solution adapted to your specific needs, offering both versatility and scalability.

## Example Flow
In the example flow below, we illustrate how to use a simple client, like CURL, to interact with the API:

**Creating a Task with a Callback**: Using the CURL command, you can create a new task and provide a callback URL where notifications should be sent.


```bash{1,4-6}
    curl -X POST "https://api.yourwebsite.com/tasks/create" \
    -H "Content-Type: application/json" \
    -d '{
      "task_name": "Example Task",
      "task_data": "Some data related to the task",
      "callback_url": "https://yourcallbackurl.com"
    }'
```
    
**Getting Task Details**: Once a task is created, use the task ID to get the task details.
```bash
    curl -X GET "https://api.yourwebsite.com/tasks/{task_id}"
```
    
**Handling Callbacks**: Your provided callback URL will receive a notification when there is an update on the task status. Your endpoint should be set up to handle these callbacks and take necessary actions. Note that it will include three URL encoded additional parameters:
task_id: To identify the task itself
status: The new status of the Task
download_url: In case the new state produces an output, this will be the URL encoded target URL to download it

```bash
    # Example Callback Data Received at your Callback URL
    https://api.customer.cloud/tasks/updated?custom=1234&task_id=1&status=completed&download_url=https%3A%2F%2Fapi.uve.ai%2Ftaskdownload.uve
```

## Flow schema

## Specification and test

<iframe src="https://test.latrup.net/uve-developer-portal/.swaggerui/?urls.primaryName=taskManagement" style="width: 100%; height:700px; border:0px" />

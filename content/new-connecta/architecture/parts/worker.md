# The Workers

## Roles

- It uses a the profile/setup concept to allow each implementation to have it's own configuration
- Use a local storage to store the profiles
- The profiles in the local storage are exposed via a **setup API** the provides CRUD operations for them
- The tasks are received via messages from the RabbitMq queues
- They may have parallel threading or not. They expose this setting to the orchestrator, that may depend on the profile used.

## Legacy workers

As a legacy worker, the workflow may be defined in the worker itself (instead of using the new recipes).

As part of the migration process, chunks of functionality will be gradually extracted from legacy workers into regular ones.

In the event that this functionality has been extracted, Legacy workers may implement an **interface** that allows for flow control and the execution of these extracted functionalities using the new orchestration ecosystem, initiated directly from the converter. To achieve this, the interface should allow for the storage of the payload in the blob for processing, initiate a task in the orchestrator, identifying it as a single-step flow, and await its synchronous result in order to proceed with the natural sequential processing typical of these types of Legacy workers.

### Interface for **𝑓n** extraction

This interface must allow to:

- Store the payload for processing
- Syncronously launch the task into the orchestrator API
- Await the result

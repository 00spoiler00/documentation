# Architecture

## Methodology

- Create the Orchestrator API, used for frontend API and backend-API.
  - It registers all the workers in BE_API (Initially only CU)
  - Talks to frontend via FE_API
  - Does passthrough of setups from workers to fe.
- Create the CU Worker and API. The API will provide CRUD for the profiles (aka setups) which will be stored in its local storage

## Notes

- APIs on WORKERS are used to configure the profiles or settings for the worker: Ex: CU uses a a list of CuConfigs. Local storage in the unit has everything needed to run the function
- Queues are used to launch jobs. A typical message consists of: BlobID (**Or File in legacies**) and a profileId for the jobSetup.
- Databases are common for each workerType cluster.

### TBD:

- Determine projects & solutions structures
- When CU need to use an extracted FN, will it use orchestration or just talk to the BE-API?
- Who stores the blob when received?
- Define the Interface to extract funcitionality from LegacyWorker (should have the launch, wait, blobManagement capabilities. Work in real cases)

## Schema

```mermaid

flowchart TD

subgraph "New Cloud"
    NEWCLOUD_FE[Angular Frontend]
end

subgraph "New Connecta"
    NEWCONNECTA_BEAPI(BackEnd API)
    NEWCONNECTA_WORKER(((Orchestrator)))
    NEWCONNECTA_DB[(Database)]
    NEWCONNECTA_FEAPI(FrontEnd API)

    NEWCLOUD_FE<-->NEWCONNECTA_FEAPI
    NEWCONNECTA_WORKER<-->NEWCONNECTA_BEAPI
    NEWCONNECTA_WORKER<-->NEWCONNECTA_DB
    NEWCONNECTA_WORKER<-->NEWCONNECTA_FEAPI
end

subgraph "WORKERS (fN)"

    subgraph "Generic functions"
        GENERIC_FUNCTIONS_API(API)
        GENERIC_FUNCTIONS_WORKER(((WORKER)))
        GENERIC_FUNCTIONS_DB[(Database)]

        GENERIC_FUNCTIONS_WORKER<-->GENERIC_FUNCTIONS_API
        GENERIC_FUNCTIONS_API<-->NEWCONNECTA_BEAPI
        GENERIC_FUNCTIONS_WORKER<-->GENERIC_FUNCTIONS_DB
    end

    subgraph "Big function"
        BIGFUNCTION_API(API)
        BIGFUNCTION_WORKER(((WORKER)))
        BIGFUNCTION_DB[(Database)]
        BIGFUNCTION_WORKER<-->BIGFUNCTION_API
        BIGFUNCTION_WORKER<-->BIGFUNCTION_DB
        BIGFUNCTION_API<-->NEWCONNECTA_BEAPI
    end

    subgraph "Legacy CU (CE/CS/...)"
        CU_API(API)
        CU_WORKER(((WORKER)))
        CU_DB[(Database)]
        CU_WORKER<-->CU_API
        CU_WORKER<-->CU_DB
        CU_API<-->NEWCONNECTA_BEAPI
    end

end

BLOB((BLOB))
FS((FS))
GENERIC_FUNCTIONS_WORKER<-.->BLOB
BIGFUNCTION_WORKER<-.->BLOB
CU_WORKER<-.->BLOB
CU_WORKER<-->FS


```

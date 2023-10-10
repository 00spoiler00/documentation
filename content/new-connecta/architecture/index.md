# Architecture

## Notes

Create the CU Worker and API. The API will provide CRUD for the profiles (aka setups) which will be stored in its local storage

APIs on WORKERS are used to configure the profiles or settings for the worker: Ex: CU uses a list of CuConfigs. Local storage in the unit has everything needed to run the **𝑓n**

Queues are used to launch jobs. A typical message consists of: **_blobID_** (Or File in legacies) and a **_profileId_** for the jobSetup.

Databases are common for each workerType cluster.

## Core architecture map

```mermaid

<!--@include: map.md-->

style NEWCONNECTA_WORKER fill:#880,stroke:#333,stroke-width:2px
style NEWCONNECTA_FEAPI fill:#480,stroke:#333,stroke-width:2px
style NEWCONNECTA_BEAPI fill:#480,stroke:#333,stroke-width:2px
style NEWCONNECTA_DB fill:#808,stroke:#333,stroke-width:2px
style F1_API fill:#480,stroke:#333,stroke-width:2px
style F1_WORKER fill:#088,stroke:#333,stroke-width:2px
style F1_DB fill:#808,stroke:#333,stroke-width:2px
style FS fill:#408,stroke:#333,stroke-width:2px
style F2_API fill:#480,stroke:#333,stroke-width:2px
style F2_DB fill:#808,stroke:#333,stroke-width:2px
style F2_WORKER fill:#088,stroke:#333,stroke-width:2px
style RABBIT fill:#048,stroke:#333,stroke-width:2px
style BLOB fill:#408,stroke:#333,stroke-width:2px

```

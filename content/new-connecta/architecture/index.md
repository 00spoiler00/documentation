# Architecture

Please, refer to each specific section for details

- [Orchestrator](./parts/orchestrator.md)
- [Orchestration API](./parts/orchestrator_api.md)
- [Worker](./parts/worker.md)
- [Channel (WIP)](./parts/channel.md)

## Core architecture map

::: warning
Channels are still WIP and not shown in this schema
:::

```mermaid

<!--@include: map.md-->

style ORCHESTRATOR fill:#880,stroke:#333,stroke-width:2px
style ORCHESTRATION_API fill:#480,stroke:#333,stroke-width:2px
style NEWCONNECTA_DB fill:#808,stroke:#333,stroke-width:2px
style LW_API fill:#480,stroke:#333,stroke-width:2px
style LW_WORKER fill:#088,stroke:#333,stroke-width:2px
style LW_DB fill:#808,stroke:#333,stroke-width:2px
style FS fill:#408,stroke:#333,stroke-width:2px
style NW_API fill:#480,stroke:#333,stroke-width:2px
style NW_DB fill:#808,stroke:#333,stroke-width:2px
style NW_WORKER fill:#088,stroke:#333,stroke-width:2px
style RABBIT fill:#048,stroke:#333,stroke-width:2px
style BLOB fill:#408,stroke:#333,stroke-width:2px

```

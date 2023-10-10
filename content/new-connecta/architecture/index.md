# Architecture

Please, refer to each specific section for details

- [Orchestrator](orchestrator.md)
- [Worker](worker.md)
- [Channel (WIP)](#)

## Core architecture map

::: warning
Channels are still WIP and not shown in this schema
:::

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

# Orchestrator

## Roles

- Performs coordination of tasks, adding business logic between DB models and the queues
- Handles new sequencing based _recipe_.
- Keeps track _cooks_ (implemetations of _recipe_ or legacy sequences)
- Keeps registers and tracks workers and their properties (management APIs, concurrence, etc.)

### Legacy roles

- Handles legacy sequencing based on filename masks (Masks service). 
- A legacy _recipe_ may exist as a wrapper for sequetial legacy processes
- Many _cooks_ from legacy _recipe_ may exist to keep track of the process. 

## DataModel

```mermaid

classDiagram

<!--@include: ./datamodels/orchestrator.md-->


```

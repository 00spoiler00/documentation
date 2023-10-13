# Orchestrator

## Roles

- Performs coordination of tasks, adding business logic between DB models and the queues
- Handles legacy sequencing based on filename masks
- Handles new sequencing based recipes.
- Keeps track _cooks_ (implemetations of recipes or legacy sequences)
- Keeps registers and tracks workers and their properties (management APIs, concurrence, etc.)

## DataModel

```mermaid

classDiagram

<!--@include: ./datamodels/orchestration.md-->


```

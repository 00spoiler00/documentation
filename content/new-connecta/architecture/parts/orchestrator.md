# The Orchestrator

## Roles

- Performs coordination of tasks
- Handles legacy sequencing based on filename masks
- Handles new sequencing based recipes.
- Keeps track _cooks_ (implemetations of recipes or legacy sequences)
- Keeps track and registrations of all the workers
- Provides UX structure to frontend via FE_API
- Relays Workers APIs to the frontend

## DataModel

```mermaid

classDiagram

<!--@include: ./datamodels/orchestration.md-->

class Payload {
    int Id Pk
    string blob_id PK
    enum type "In/Mid/Out"
    datetime created_at
}
Recipe_Step "1" -- "1..n" Payload

class CU {
    <<Service>>
}
CU --> Worker

```

# Channel

## Roles

### Inbound

- Collect input datasets from a mixture of technologies
- Identify the the _user_ and _recipe_ if exists, or fallback to legacy workflow.
- Store the dataset in the proper storage (blob or filesystem)
- Trigger events or insert tasks into the Orchestrator's TaskAPI

### Outboud

- Serve as an adaptor from the payload to the target system

## Schema

```mermaid

classDiagram

<!--@include: ./datamodels/channel.md-->


```

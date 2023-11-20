# Data model

This section will receive gradual updates of UVE's datamodels

## Connecta

```mermaid

erDiagram
    DISTRIBUIDOR ||--|{ PDV : ""
    PDV }|--|| PDV_MATCH : ""
    PDV_MATCH ||--|{ CONTACT : ""
    PDV ||--|{ CONTACT : "new"

```
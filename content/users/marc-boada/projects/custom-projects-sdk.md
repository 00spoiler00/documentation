# KickOff

## General notes

- Assumeix projectes de:
- Complexitat superior
- Funcions existents no porporcionen
- Conversors Especifics
- Connectors
- Webhooks (endpoint i continguts)
- Azure functions, no pipelines
- Upds + Outs

## Idees creixement i SDK

- Disponibilitat de configuració centralitzada: Utilitzar proveidor d'Azure.
- Abstreure les funcions comuns dels CEs actuals (DB, Sendgrid, UVEAlertLog, Consumidor UVEAPI, )

| -Nom-                         | -InfraActual- | Implementació  | Consumeix                  |
| ----------------------------- | ------------- | -------------- | -------------------------- |
| Service Parametrization SRV   | Server        | JSON           | --                         |
| Service Parametrization AZFn  | AZFn          | JSON & AzFnCfg | --                         |
| CE                            | SRV           | C & P          | Poca API                   |
| Webhooks-                     | AZFunc        | C & P          | No consumeix DB, només API |
| Consumició de la DB           | Server        | C & P          | DB                         |
| EmailBroker                   | --            | C & P          | API                        |
| Logger (Kibana)               | --            | C & P          | Local / AzFNLogs           |
| AlertLog (Alert)              | --            | C & P          | API                        |
| UVEAPI (Llibreria d'entitats) | All           | C & P          | API                        |
| UVEAPI (Client amb AUTH+PAG+) | All           | C & P          | API                        |
| FileManagement                | All           | C & P          | API                        |
| Flow???                       |               |                |                            |
| ---------------------------   | ------------- | -------------- | -------------------------- |
| Monitoring                    | None          |                | API                        |

Idees:

- NuGETs (Issues domini seguretat)
- UveApiConsumer (Issues rendiment)

Notes:

Monitoring:

- TempsResposta + Execucions + etc..
- Utilitzar infra de monitorització.
- Podriem fer un client que reporti sobre la infra de .

## Projecte connector SAP:

- Treballat per Pau de las heras (durant 2 anys)
- Projecte DDI
- Segmented to Delimited (iDOCs)
- Busquem una estandarització del connector SAP
- Reunió Pau + Jordi

# Meet 2

- Implentació sistemes de test (seguint ele template dels projectes).
- Deployment (based in dst servers, abstract deployment, GitFlow and automatic deployments)

## Preguntes Connecta

Paquetitzar. Què incloem a l'SDK.

- Client API (standaritzat + entitats)
- Sistema logging (Alert, Kibana, Correu?)
- Sistemes de parametrització centralitzada (Sergio)
- Investigar KeyVaults (tenen latència, es poden accedir via parameters?? Sergio)
- Millora del procés d'integració dels específics. Com funciona? Com es pot millorar?

## Propostes

- Creació de multiples template (identificar patrons i abtraccions) [n, + basica]

- Fem taula de dimensions per trobar clusters.

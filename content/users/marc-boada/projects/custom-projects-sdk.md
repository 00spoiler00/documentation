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

| -Nom-                       | -InfraActual- | Implementació  | Consumeix                  |
| --------------------------- | ------------- | -------------- | -------------------------- |
| Service Configuracions SRV  | Server        | JSON           | --                         |
| Service Configuracions AZFn | AZFn          | JSON & AzFnCfg | --                         |
| CE                          | SRV           | C & P          | Poca API                   |
| Webhooks-                   | AZFunc        | C & P          | No consumeix DB, només API |
| Consumició de la DB         | Server        | C & P          | DB                         |
| EmailBroker                 | --            | C & P          | API                        |
| Logger                      | --            | C & P          | Local / AzFNLogs           |
| AlertLog                    | --            | C & P          | API                        |
| UVEAPI                      | All           | C & P          | API                        |
| --------------------------- | ------------- | -------------- | -------------------------- |
| Monitoring                  | None          |                | API                        |

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

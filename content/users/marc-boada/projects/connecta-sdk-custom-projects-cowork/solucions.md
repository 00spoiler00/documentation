# Solucions proposades i aplicabilitat

| Solució                        | Custom Projects | Partner | Connecta | SDK | Notes                                                       |
| ------------------------------ | --------------- | ------- | -------- | --- | ----------------------------------------------------------- |
| Arquitectura modular           | Y               | Y?      | Y        | -   | Quina arquitectura?                                         |
| Utilitzar AKS                  | Y               | N       | N        | N   | Resoldre com integra el partner                             |
| Paquet consumidor UveAPI       | Y               | Y       | Y        | Y   | No per Connecta (general, matingut per?)                    |
| Paquet accés DB                | Y               | N       | Y        | N   | ---                                                         |
| Paquet accés DB via DataAccess | Y               | Y       | ?        | Y   | Ens docs accés al que necessitem?                           |
| Paquet accés Payload (FS/BLOB) | Y               | N?      | Y        | N   | Abstraiem de la tecnologia (podria servir a partner si AKS) |
| Paquet AlertLog                | Y               | N       | Y        | N   | ---                                                         |
| Paquet Logging Kibana          | Y               | N       | Y        | N   | Proporcionat per Core                                       |
| Plantilles                     | Y               | Y       | ?        | Y   | Dificils de mantenir                                        |

- Ofeririem infra com a part de l'SDK (Arquitectura, storage...)
- S'aporten només el mòduls per part de CP o Partner (Definir tecnologia i interfaces)

## PROs

- Resolem deploys, monitorització, escalat i parametrització

## Confirmats

- Llibreria de gestió de Payloads

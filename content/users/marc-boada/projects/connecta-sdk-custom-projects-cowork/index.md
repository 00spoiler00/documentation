# Connecta SDK & Custom Projects coworking

## Objectiu

- Cocreació d'un SDK de Connecta.
- Implementació a Custom de l'SDK per milorar l'eficiència i la qualitat del les de les integracions

## Punts clau

- Connecta

  - Hauria de proveir un SDK orientat a facilitar els desenvolupaments d'integracions per partners, power users i 'clients interns'

- Custom Projects

  - Disposa d'un extens coneixement de les casuístiques d'integració
  - Pot emular els rols de 'partner', i 'power user' fàcilment per definir SDK i testejar-lo
  - Pot participar en el desenvolupament de l'SDK
  - Les seves operacions es veurien beneficiades per l'ús d'aquest SDK

## Metodologia

- Recollida de metodologies actuals en CustomProjects, punts forts i punts dèbils.
- Obtenir mètriques de casos d'ús de CustomProjects per identificar eines a desenvolupar i prioritats.
- Definir i validar les eines integrants de l'SDK.
- Establir el pla de desenvolupament de les mateixes.
- Codesenvolupament del SDK entre CustomProjects i Connecta.
- Implementació de les noves eines en CustomProjects.

## Sessions

[Kickoff 231218](./meets/00_kickoff_231218.md)

[Sessió treball 240109](./meets/01_worksession_240109.md)

- Identificades mancances/àrees de millora tècnica a Custom

**Meet Oriol Ventosa**

- Validada les propostes de millora
- Confirmada la falta de paquets granulars

**Meet Jordi Camps**

- Validada les propostes de millora
- Rebaixa en la prioritat en actuacions de pipelines i repositoris

[Sessió treball 240110](#)

- Comentada la viabilitat de les solucions.
- CP exposa les dimensions de l'auditoria que han iniciat
-
- Comentem també la possiblitat de crear una llista de dubtes operatius que tenen.

**TODO**

| Qui | Estat | Concepte                                  | Interlocutors                 | Todo                                                            |
| --- | ----- | ----------------------------------------- | ----------------------------- | --------------------------------------------------------------- |
| MB  | Done  | Idees generals (Templates&Paquets)        | Oriol Ventosa, Jordi Camps    | Feedback                                                        |
| MB  | Done  | Paquets                                   | Oriol Ventosa, Sergio Barja   | No existeixen                                                   |
| CP  | Wip   | Dataset projectes                         | -                             | Creació per identificar aplicabilitat solucions                 |
| CP  | Wip   | Definició dels protocols operatius        | -                             | Per identificar punts d'implementaicó de les millores tècniques |
| CP  | Wip   | Projectes model                           | -                             | Proporcionar projectes de referència per inferir templates      |
| MB  | Todo  | Paquet Logging (Kibana & Alert)           | Oriol Ventosa, Enric Seijo    | Existeix? Aspectes networking & Seguretat                       |
| MB  | Todo  | Paquet Correu                             | Oriol Ventosa, Enric Seijo    | Què aporta?                                                     |
| MB  | Todo  | Paquet UveApiConsumer + Entitats          | Esteve Martín                 | Existeix? Té sentit? Exposar problemàtica Custom                |
| MB  | Todo  | Procés d'activació dels específics        | Oriol Ventosa, Pau Palà       | Com es fa actualment? Com es podria millorar?                   |
| MB  | Todo  | Sistemes de parametrització centralitzada | Sergio Barja                  | Problemàtica actual, propostes (&KVaults)                       |
| MB  | Todo  | Sistemes de plantilles C#                 | Sergio Barja, Esteve Martín   | Exposició propostes i problemàtica actual. Idees?               |
| MB  | Todo  | Definició d'un CICD abtracte              | Estanis Iglesias, Enric Seijo | Experiències? Feedback?                                         |
| MB  | Todo  | Standard monitoratge per CE               | Estanis Iglesias, Enric Seijo | Exposició problemàtica, Idees? Protocol?                        |
| -   | -     | Aplicació de monitoring?                  | -                             | Cal implemnetar alguna solució per integrar la monitorització?  |

## Next steps

- Analisis del DataSet per identificar clusters.
- Anàlisis projectes tipus per definir abast de les plantilles
- Definició de l'ecosistema de paquets ConnectaSDK, quins, complexitat, responsables, sistema de publicació i documentació.

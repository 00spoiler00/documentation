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

- Validades les propostes de millora
- Confirmada la falta de paquets granulars

**Meet Jordi Camps**

- Validades les propostes de millora
- Rebaixa en la prioritat en actuacions de pipelines i repositoris

[Sessió treball 240119](./meets/01_worksession_240109.md)

- Comentat Dataset.
- Accessos a Repos
- Anàlisis de totes tipologies de solució
- Aproximació a arquitectura modular vs multi projecte. Solucionem:
  - Plantilles
  - Escalat
  - Mantenibilitat (plantilles, pequen)
  - Monitorització del servei
  - Conistència dels fluxes
- Possiblitat de migració de serveis locals a AzFn/AKS (salvant DB & Arxius)ç
  - Si AKS, solucionem DB (Caldria ajustar FileSystem)

**Meet Estanis Iglesias**

- Comentada la possiblitat i suggereix millor l'AKS. De pas, resolem temes de seguretat, coneixem el domini i la gestió de cost/rediment

**TODO**

| Qui | Estat | Concepte                                            | Interlocutors                 | Todo                                                            |
| --- | ----- | --------------------------------------------------- | ----------------------------- | --------------------------------------------------------------- |
| MB  | Done  | Idees generals (Templates&Paquets)                  | Oriol Ventosa, Jordi Camps    | Feedback                                                        |
| MB  | Done  | Paquets                                             | Oriol Ventosa, Sergio Barja   | No existeixen                                                   |
| CP  | Done  | Definició dels protocols operatius                  |                               | Per identificar punts d'implementaicó de les millores tècniques |
| CP  | Done  | Projectes model                                     |                               | Proporcionar projectes de referència per inferir templates      |
| CP  | Wip   | Dataset projectes                                   |                               | Creació per identificar aplicabilitat solucions                 |
| MB  | Wip   | Validació infra arqutectura AzFn/AKS                | Estanis                       | Validació de preus i negoci de les propostes                    |
| MB  | Wip   | Validació JC (monosolució, AzFn/AKS, sinèrgies SDK) | Jordi Camps                   | Validació de preus i negoci de les propostes                    |
| MB  | Todo  | Definició arqutectura monoservei AzFn/AKS           |                               | Proposta mòduls i arquitectura del projecte                     |
| MB  | Todo  | Definició de paquets                                | Oriol Ventosa                 | ApiConsumer/Logging/?                                           |
| MB  | Hold  | Paquet Logging (Kibana & Alert)                     | Oriol Ventosa, Enric Seijo    | Existeix? Aspectes networking & Seguretat                       |
| MB  | Hold  | Paquet Correu                                       | Oriol Ventosa, Enric Seijo    | Què aporta?                                                     |
| MB  | Hold  | Paquet UveApiConsumer + Entitats                    | Esteve Martín                 | Existeix? Té sentit? Exposar problemàtica Custom                |
| MB  | Hold  | Procés d'activació dels específics                  | Oriol Ventosa, Pau Palà       | Com es fa actualment? Com es podria millorar?                   |
| MB  | Hold  | Sistemes de parametrització centralitzada           | Sergio Barja                  | Problemàtica actual, propostes (&KVaults)                       |
| MB  | Hold  | Sistemes de plantilles C#                           | Sergio Barja, Esteve Martín   | Exposició propostes i problemàtica actual. Idees?               |
| MB  | Hold  | Definició d'un CICD abtracte                        | Estanis Iglesias, Enric Seijo | Experiències? Feedback?                                         |
| MB  | Hold  | Standard monitoratge per CE                         | Estanis Iglesias, Enric Seijo | Exposició problemàtica, Idees? Protocol?                        |

## Next steps

- Anàlisis del DataSet per identificar clústers.
- Validació proposta Projecte Modular, a AKS/AzFn
- Exposició dels punts de sinèrgia vs de millora (i next steps)

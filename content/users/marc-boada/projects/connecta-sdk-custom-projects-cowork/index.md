# Connecta SDK & Custom Projects coworking

## Objectiu

- Cocreació i implementació a Custom d'un SDK de Connecta que millori l'eficiència dels desenvolupaments de les integracions

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

[Sessió treball 240110](#)

**TODO**

- Marc Boada
  - Contrastar les solucions/problemàtiques ideades amb els especialistes de cada àrea

| Concepte                                  | Interlocutors                 | Todo                                              |
| ----------------------------------------- | ----------------------------- | ------------------------------------------------- |
| Idees generals (Templates&Paquets)        | Oriol Ventosa, Sergio Barja   | Feedback                                          |
| Paquets                                   | Oriol Ventosa, Sergio Barja   | Existeixen? Mancances? Documentació? Problemàtica |
| Paquet Logging (Kibana & Alert)           | Oriol Ventosa, Enric Seijo    | Existeix? Aspectes networking & Seguretat         |
| Paquet Correu                             | Oriol Ventosa, Enric Seijo    | Què aporta?                                       |
| Procés d'activació dels específics        | Oriol Ventosa, Pau Palà       | Com es fa actualment? Com es podria millorar?     |
| Sistemes de parametrització centralitzada | Sergio Barja                  | Problemàtica actual, propostes (&KVaults)         |
| Sistemes de plantilles C#                 | Sergio Barja, Esteve Martín   | Exposició propostes i problemàtica actual. Idees? |
| Client API C# + Entitats                  | Esteve Martín                 | Existeix? Té sentit? Exposar problemàtica Custom  |
| Definició d'un CICD abtracte              | Estanis Iglesias, Enric Seijo | Experiències? Feedback?                           |
| Standard monitoratge per CE               | Estanis Iglesias, Enric Seijo | Exposició problemàtica, Idees? Protocol?          |

- Jordi Samaniego & Pau de las Heras:
  - Creació d'un DataSet dels CEs actuals per identificar clusters de millora i aplicabilitat de les eines proposades
  - Definició dels protocols actuals operatius per identificar on implementar les millores tècniques

## Temes no tractats

- Analisis de mancances en Monitoring (Core?):

  - TempsResposta + Execucions + etc..
  - Utilitzar infra de monitorització.

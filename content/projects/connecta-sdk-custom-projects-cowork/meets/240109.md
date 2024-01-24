# WorkSession 01 240109

- Pau de las Heras, Jordi Samaniego, Marc Boada

## Recollida de característiques

- Nou cas d'ús dels parsejat d'arxius XML com a candidat de millores
- Metodologia de creació de nous convertidors via CopyPaste (repetició de codi, reversionat, etc..)
- Manca de tests
- Manca de pipelines de desplegament
- Possible manca de protocol·lització en els repositoris
- Problemes de rendiment i d'eficiència operativa en les parametritzacions (i secrets) dels projectes
- Mancances en consumir l'API (tediós i inconsistent)

## Propostes de millora integrants d'un SDK C#

- Sistema de plantilles de projectes C#

  - Defineix **flux** bàsic
  - Defineix sistema de **parametrització** estàndard .NET (Viaproveïdorss centralitzats (azure?))
  - Evita **replicació de codi** i obliga a afegir les funcionalitats
  - Facilita **corba d'aprenentatge**
  - Incorpora infraestructura de **test**
  - Imposa **arquitectura** bàsica (p.ex: DI, Logging, ...)
  - Incorpora els **paquets** oficials 'UVE/Connecta'

- Creació de paquets NuGet (Logging/Missatgeria/ApiConsumer)

  - Logging
  - Missatgeria
  - UveAPIConsumer (Amb entitats)

- CICD

  - Adopció de protocols estàndard GitFlow amb desplegament automàtic
  - Creació d'una pipeline genèrica per desplegament SRV & AFn (&Test)

## Next steps

### Marc Boada. Aterrar conceptes.

| Concepte                                  | Interlocutors                 | Todo                                              |
| ----------------------------------------- | ----------------------------- | ------------------------------------------------- |
| Idees generals (Templates&Paquets)        | Oriol Ventosa, Sergio Barja   | Feedback                                          |
| Paquets                                   | Oriol Ventosa, Sergio Barja   | Existeixen? Mancances? Documentació? Problemàtica |
| Client API C# + Entitats                  | Esteve Martín                 | Existeix? Té sentit? Exposar problemàtica Custom  |
| Paquet Logging (Kibana & Alert)           | Oriol Ventosa, Enric Seijo    | Existeix? Aspectes networking & Seguretat         |
| Paquet Correu                             | Oriol Ventosa, Enric Seijo    | Què aporta?                                       |
| Sistemes de plantilles C#                 | Esteve Martín, Sergio Barja   | Exposició propostes i problemàtica actual. Idees? |
| Sistemes de parametrització centralitzada | Sergio Barja                  | Problemàtica actual, propostes (&KVaults)         |
| Procés d'activació dels específics        | Pau Palà, Oriol Ventosa       | Com es fa? Com es podria millorar?                |
| Definició d'un CICD abtracte              | Estanis Iglesias, Enric Seijo | Experiències? Feedback?                           |
| Standard monitoratge per CE               | Estanis Iglesias, Enric Seijo | Exposició problemàtica, Idees? Protocol?          |

### Custom Projects.

- Creació d'un DataSet dels CEs actuals per identificar clusters de millora i aplicabilitat de les eines proposades
- Definició dels protocols actuals operatius per identificar on implementar les millores tècniques

## Propera reunió, temes no tractats amb CustomProjects

- Analisis de mancances en Monitoring (Core?):
  - TempsResposta + Execucions + etc..
  - Utilitzar infra de monitorització.

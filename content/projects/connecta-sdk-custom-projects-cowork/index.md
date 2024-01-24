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

[Kickoff 231218](./meets/231218.md)

[Sessió treball 240109](./meets/240109.md)

- Identificades mancances/àrees de millora tècnica a Custom

**Meet Oriol Ventosa**

- Validades les propostes de millora
- Confirmada la falta de paquets granulars

**Meet Jordi Camps**

- Validades les propostes de millora
- Rebaixa en la prioritat en actuacions de pipelines i repositoris

[Sessió treball 240119](./meets/240109.md)

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

**Meet Jordi Camps**

- Comentada possiblitat migració a AKS, potser no és adient, doncs és d'us intern i no resol partners

**Sessió treball 240118**

- Anàlisis dels casos proporcionats al dataset
- Comentem proposta solucions

[Sessió de treball 240123](./meets/240123.md)

- Anàlisis de la estructura de diversos projectes.

## Solucions proposades

Les solucions en les que treballem ara mateix son:

- Projecte unic modular a AKS/AzFN, basat en 'plugins' i 'microkernel'
- Creació de diversos paquests NuGET

[Taula de soluciones proposades](./solucions.md)

### Next steps

1. Separar esquemes extrets de les apps en fases (E + T + L)

[Analisis WIP](./flux-teoric.md)

2. Definir els interfaces de cada fase
3. Definir els paquets exactament (nom, responsabilitat, mantenidor?)
4. Validació del concepte de plugin i de l'allotjament a la infra d'UVE i model de negoci.
5. Creació d'una PoC del projecte Modular, a AKS/AzFn. Definir esquema i interfases (tecnologia, etc.)

#### Done

~~- Preveure partner en aquests nous esquemes i infra. Com gestionem la seva integració i segureat~~
~~- Fer taula de solucions i aplicabilitat a partner & CP~~
~~- Exposició dels punts de sinèrgia vs de millora (i next steps)~~
~~- WIP: Anàlisis del DataSet per identificar clústers.~~

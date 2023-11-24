## PHASE 1: UC CRUD

Requirements:

- No requirement for customized components
- Simplification of tool to a simple CRUD of UCSetup
- No graphical UX requirements
- Possibility to reuse existing API consumers
- Minimal validation & error handling
- Current legacy replication

PROS:

- Quick launch!

```mermaid

flowchart TD

    App --> Connecta-Domain-Package --> Connecta-Domain-Module
    App --> Connecta-Router-Package --> Connecta-Router-Module

    App --> Connecta-Feature-List-Package --> Connecta-Feature-List-Module
    Connecta-Feature-List-Module --> UveApi-Package
    App --> Connecta-Feature-Detail-Package --> Connecta-Feature-Detail-Module

    Connecta-Feature-Detail-Module --> UveApi-Package
    Connecta-Feature-Detail-Module --> Shared-Package

    Shared-Package --> Dataset
    Shared-Package --> Connector

    UveApi-Package --> EntityV1 --> ApiLib-Module

    Connecta-Feature-List-Module --> UveSharedEntities-Package
    Connecta-Feature-Detail-Module --> UveSharedEntities-Package

    UveSharedEntities-Package --> Entities

```

## PHASE 2: New architecture

New needs:

- A wider catalog of components and features
- Simplification of structures due to complexity of content
- More customization of content
- Specific version of API consumer, non opinionated usage (Not only CRUD or entityVx)

```mermaid

flowchart TD

    classDef module fill:#48CAFF
    classDef component fill:#29A877
    classDef other fill:#FBCB1F


    App:::module --> ConnectaPackage
    ConnectaPackage --> ConnectaModule:::module
    ConnectaPackage ---> ConnectaAssets:::other

    ConnectaModule --> Api:::service
    ConnectaModule --> Router:::module
    ConnectaModule --> Entities:::other
    ConnectaModule --> DashBoardMenu:::component
    ConnectaModule --> UCListModule:::module
    ConnectaModule --> UCDetailModule:::module

    subgraph Services
        Api --> Interceptors:::other
        Interceptors --> BaseUrl:::other
        Interceptors --> Auth:::other
        Interceptors --> ExceptionHandler:::other
    end


    subgraph Features
        UCListModule --> UCList:::component
        UCDetailModule --> UCDetail:::component
        DashBoardMenu
        UCList
        UCDetail
    end

    Auth-.->SessionService

```

# PHASE 3: Recipes, Maps & increased complexity

New needs:

- Increased complexity
- Map features

```mermaid

flowchart TD

    classDef module fill:#48CAFF
    classDef component fill:#29A877
    classDef other fill:#FBCB1F


    App:::module --> ConnectaPackage
    ConnectaPackage --> ConnectaModule:::module
    ConnectaPackage ---> ConnectaAssets:::other

    ConnectaModule --> Api:::service
    ConnectaModule --> Router:::module
    ConnectaModule --> Entities:::other
    ConnectaModule --> MapModule:::module
    MapModule --> Map:::component
    MapModule --> MapBox:::component
    MapModule --> MapConnection:::component
    MapModule --> MapElementEditor:::component
    ConnectaModule --> UCListModule:::module
    ConnectaModule --> UCDetailModule:::module

    subgraph Services
        Api --> Interceptors:::other
        Interceptors --> BaseUrl:::other
        Interceptors --> Auth:::other
        Interceptors --> ExceptionHandler:::other
    end


    subgraph Features
        UCListModule --> UCList:::component
        UCDetailModule --> UCDetail:::component
        UCList
        UCDetail
    end

    subgraph MapFeatures
        MapModule:::module
        Map
        MapBox
        MapConnection
        MapElementEditor
    end

    Auth-.->SessionService

```

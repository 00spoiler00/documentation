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

flowchart LR

    classDef package fill:#39a2cc
    classDef module fill:#1c7553
    classDef component fill:#c7a118

    App:::module

    App --> Connecta-Domain-Package:::package --> Connecta-Domain-Module:::module
    App --> Connecta-Router-Package:::package --> Connecta-Router-Module:::module

    App --> Connecta-Feature-List-Package:::package --> Connecta-Feature-List-Module:::module
    Connecta-Feature-List-Module:::module --> UveApi-Package:::package
    Connecta-Feature-List-Module --> ListComponent:::component

    App --> Connecta-Feature-Detail-Package:::package --> Connecta-Feature-Detail-Module:::module
    Connecta-Feature-Detail-Module --> DetailComponent:::component
    Connecta-Feature-List-Module --> Shared-Package:::package


    Connecta-Feature-Detail-Module --> UveApi-Package


    Shared-Package --> Dataset
    Shared-Package --> Connector

    UveApi-Package --> EntityV1 --> ApiLib-Module --> ...

    Connecta-Feature-List-Module --> UveSharedEntities-Package:::package
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

flowchart LR

    classDef module fill:#39a2cc
    classDef component fill:#1c7553
    classDef other fill:#c7a118
    classDef package fill:#751c53
    classDef service fill:#531c75


    App:::module --> ConnectaPackage:::package
    ConnectaPackage --> ConnectaModule:::module
    ConnectaPackage ---> ConnectaAssets:::other

    ConnectaModule --> ConnectaApi:::service
    ConnectaModule --> Router:::module
    ConnectaModule --> Entities:::other
    ConnectaModule --> DashBoardMenu:::component
    ConnectaModule --> UCListModule:::module
    ConnectaModule --> UCDetailModule:::module

    subgraph Services
        ConnectaApi --> Interceptors:::other
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

    Auth-.-SessionService:::service
    BaseUrl-.-EnvironmentService:::service

```

# PHASE 3: Recipes, Maps & increased complexity

New needs:

- Increased complexity
- Map features

```mermaid

flowchart LR

    classDef module fill:#39a2cc
    classDef component fill:#1c7553
    classDef other fill:#c7a118
    classDef package fill:#751c53
    classDef service fill:#531c75

    App:::module --> ConnectaPackage:::package
    ConnectaPackage --> ConnectaModule:::module
    ConnectaPackage ---> ConnectaAssets:::other

    ConnectaModule --> ConnectaApi:::service
    ConnectaModule --> Router:::module
    ConnectaModule --> Entities:::other
    ConnectaModule --> MapModule:::module
    MapModule --> Map:::component
    MapModule --> MapBoxElement:::component
    MapModule --> MapConnectionElement:::component
    MapModule --> MapElementEditor:::component

    ConnectaModule --> NodeSetup_Module:::module
    NodeSetup_Module --> Abstract_NodeSetup_Indexing:::component
    Abstract_NodeSetup_Indexing:::component -.-> NodeSetupIndexing_1:::component
    Abstract_NodeSetup_Indexing:::component -.-> NodeSetupIndexing_2:::component
    NodeSetup_Module --> Abstract_NodeSetup_Editing:::component
    Abstract_NodeSetup_Editing:::component -.-> NodeSetup_Editing_1:::component
    Abstract_NodeSetup_Editing:::component -.-> NodeSetup_Editing_2:::component

    subgraph Services
        ConnectaApi --> Interceptors:::other
        Interceptors --> BaseUrl:::other
        Interceptors --> Auth:::other
        Interceptors --> ExceptionHandler:::other
    end


    subgraph NodeFeatures
        NodeSetup_Module
        Abstract_NodeSetup_Indexing:::component
        NodeSetupIndexing_1:::component
        NodeSetupIndexing_2:::component
        Abstract_NodeSetup_Editing:::component
        NodeSetup_Editing_1:::component
        NodeSetup_Editing_2:::component
    end

    subgraph MapFeatures
        MapModule:::module
        Map
        MapBoxElement
        MapConnectionElement
        MapElementEditor
    end

    Auth-.-SessionService:::service
    BaseUrl-.-EnvironmentService:::service

```

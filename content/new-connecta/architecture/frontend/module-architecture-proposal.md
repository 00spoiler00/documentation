## PHASE 1: UC CRUD

Requirements:
- No requirement for customized components
- Simplification of tool to a simple CRUD of UCSetupç
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
- Using overengineered components for the requirements
- Lack of customization
- New version of API consumer required (Not only CRUD or entityVx)
- NewConnecta Tool will require different components, grouped into a module
- Single library for connecta, packing Services (ApiConsumer, etc..) and Components. 

```mermaid

flowchart TD

    App --> ConnectaModule

    ConnectaModule --> Api
    ConnectaModule --> Router
    ConnectaModule --> RecipeList
    ConnectaModule --> RecipeEdit/View/Create
    ConnectaModule --> Map

    subgraph Services
        Api --> Interceptors
        Interceptors --> AuthInterceptor
        Interceptors --> ExceptionInterceptor
    end

    
    subgraph Components
        RecipeList
        RecipeEdit/View/Create
        Map
    end
    

```




```mermaid

---
title: Phase 2 (Map, RecipeList, Only UC)
---

flowchart TD

    Connecta[(Connecta Module)]
    Components((Components))
    Services((Services))

    App --> Connecta

    Connecta --> Services
    Services --> Router
    Services --> Api --> Interceptors
    
    Connecta --> Components
    Components --> RecipeList
    Components --> RecipeEdit/View/Create
    Components --> Map
    
    Interceptors --> AuthInterceptor
    Interceptors --> ExceptionInterceptor

```

```mermaid

---
title: Phase 3 (Map, RecipeList, Other functionalities)
---

flowchart TD

    Connecta[(Connecta Module)]
    Components((Components))
    Services((Services))

    App --> Connecta

    Connecta --> Services
    Services --> Router
    Services --> Api --> Interceptors
    
    Connecta --> Components
    Components --> RecipeList
    Components --> RecipeEdit/View/Create
    Components --> Map
    
    Interceptors --> AuthInterceptor
    Interceptors --> ExceptionInterceptor

```


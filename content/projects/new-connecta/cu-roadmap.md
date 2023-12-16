# MILESTONE: Graphical Angular editting of legacy CU in NewCloud 

## Assumptions
- The main model is CUConfig (Related to Customer)
- The main UX is consists of and indexer (CRUD) + editor

## Tasks

### API
- Define the API location for CU service
    - New project (Name: New Connecta, New project)

```mermaid
flowchart
    subgraph NewConnecta
        Frontend <--> FrontEnd_API
        FrontEnd_API <--> NewConnecta_W
        Backend_API <--> NewConnecta_W
        NewConnectaDB <--> NewConnecta_W
    end
    subgraph NewConnectaWorkers
        Functions_W["fa:fa-twitter for peace"]
        Functions_W <--> Functions_API
        Functions_API <--> Backend_API
        Function_1_W <--> Function_1_API
        Function_1_API <--> Backend_API
        Function_2_W <--> Function_2_API
        Function_2_API <--> Backend_API
    end
    subgraph LegacyCU
        LegacyCU_W <--> Legacy_CU_API
        Legacy_CU_API <--> Backend_API
    end
    subgraph ExtractedLegacyFunc
        Legacy_CU_API <--> Extracted_API
        Extracted_W <--> Extracted_API
        Extracted_API <--> Backend_API
    end
```

- Create an API to export of the CUConfigs
    - In the new project
- Expose existing CUConfigs for a user (simple view)
- Render the list of configurations available in the NewConnecta Interface
- Allow deletion and creation of new CUs. in FE.
- Allow deletion and creation of new CUs. in BE. Validations?
- Discover NewCloud, structure & possiblities  
- Define the CU configuration UX interface window
- Define the locations where the components wil reside
- Define the UX locations of the new CU Editor
- Create the set of Angular components to handle a CUConfig (Create+Edit)
- Define business rules & validations for the CUConfig FE. 
- Handle POST of settings for a CUConfig (Create & edit)
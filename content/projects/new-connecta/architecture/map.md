flowchart LR

subgraph NEWCONNECTA ["UX & Orchestration"]
NEWCONNECTA_DB[(DB)]
ORCHESTRATION_API("Orchestration API
(uve.connecta.orchestration.api)")
subgraph ORCHESTRATOR ["Orchestrator
(uve.connecta.orchestration.orchestrator)"]
RECIPES(("RECIPES"))
DOORMAN(("DOORMAN"))
end
end

style ORCHESTRATOR fill:#333

subgraph LW ["Legacy Workers (current repos)"]
LW_DB[(DB)]
LW_API(API)
LW_WORKER(((WORKER)))
FS((FS))

end

subgraph NW ["[New || Extracted] Workers (N)
(uve.connecta.workers.xxx)"]
NW_API(API)
NW_DB[(DB)]
NW_WORKER(((WORKER)))

end

subgraph NC ["New Cloud"]
NEWCLOUD_FE[Frontend]

end

RABBIT((RABBITMQ))

BLOB((BLOB))

RECIPES<-->NEWCONNECTA_DB
ORCHESTRATION_API-->NEWCONNECTA_DB
ORCHESTRATION_API-->LW_API
ORCHESTRATION_API-->NW_API
NEWCLOUD_FE-->ORCHESTRATION_API
LW_WORKER-->LW_DB
LW_API-->LW_DB
LW_WORKER<-.->FS
NW_API-->NW_DB
NW_WORKER-->NW_API
ORCHESTRATOR<-...->RABBIT
NW_WORKER<-..->RABBIT
LW_WORKER<-..->RABBIT
LW_WORKER<-.->BLOB
NW_WORKER<-.->BLOB

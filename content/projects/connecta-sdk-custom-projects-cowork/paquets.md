# Paquets proposats


- Gestió de payloads
    - Gestió dels batches
    - Gestió dels backups, snapshots, ...
    - FileSystem __*__
    - Blobs
    - FTP/SFTP
    - API...

- Accés a entitats
    - Via API (client API + DTOs)
    - Via DB (EF + DTOs) __*__

- Configuradors / Parametritzadors
    - Multiple config providers

- Gestor de tasques (Tareas)?? __*__

- Messaging **??**
    - Kibana Logs __*__
    - Webhooks
    - Mail



## Logging

- Logger.Send(msg, level, [channel])

## Logging Channel

Plugins for the logging plugin

- Mail
- Kibanna
- Webhook
- DB

## Payload (Tabular data massive sources)

Implementations: Blob, FS, API

- PayLoad
  - Batch
    - AddContent(Name, Content)
    - GetContent(Id)
  - Backup
  - Restore

## Entity (Non massive, mappable entities CRUD)

- API
- DB
- DataAcess
- EntityFramework

### DTOs (Should be fixed in microkernel, or scoped in plugins)

- Target output nomenclators
- Target API mappings
- EntityFramework DB mappings
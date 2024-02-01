# Proposta V1

::: danger NOTES
Aquesta versió ha estat descartada
:::

## Desafiaments clau

- Reconduir tecnològicament els desenvolupaments de __Custom Projects__ per millorar-ne la qualitat, l'eficàcia i mantenibilitat.
- Aconseguir una solució que sigui transversal, cobrint les necessitats __Custom Projects__ així com dels __partners__ per fer una integració customitzada.
- Unificació dels 4 principals perfils de __Custom Projects__ (Servies en servidor, AzFn, etc...) en un standard.
- Establir una arquitectura escalable, monitoritzable, i versàtil per les integracions customitzades.

## Desenvolupament del SDK

- Es proposa crear un servei amb arquitectura microkernel. 
- Aquest sistema estaria a AKS, garantitzant l'escalat 
- Els plugins d'aquest CORE disposarien del seu SDK (template, documentació, contractes). 
- Part d'aquests plugins serien formarien par de la lliberia de plugins, reutilitzables per __Custom Projects__ i pels clients.
- Creació de la documentació SDK Plugin + Core + Plugins

### Llibreria plugins:

   - Configuradors / Parametritzadors
      - Multiple config providers

   - Accés a entitats
      - Via API (client API + DTOs)
      - Via DB (EF + DTOs) __*__

   - Gestió de payloads
      - Gestió dels batches
      - Gestió dels backups, snapshots, ...
      - FileSystem __*__
      - Blobs
      - FTP/SFTP
      - API...

   - Gestor de tasques (Tareas) __*__
   
   - Messaging
      - Kibana Logs __*__
      - Webhooks
      - Mail

   - Transformadors
      - JsonAta
      - || JS Interpreter
      - ...

## Accions

- Especificació de l'arquitectura
- Definició del l'equip de desenvolupament de cada una de les peces
   - Core
   - Llibreries de plugins
   - Infraestructura
- Publicació de la documentació de l'SDK
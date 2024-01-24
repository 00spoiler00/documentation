- Accés a repos
- Analitzem casos reals i estructures tipus de projecte

## Anàlisis Tipus:

### Convertidor:

- Treballa files amb preinbox.
- Agafa segons màscara.
- Interacciona amb la outbox

- Detecta a pre -> mou a bk -> treballa amb bk

```mermaid
flowchart TD
    CE((C.Especific))
    PreInbox[PreInbox]
    BackupBox[BackupBox]
    LogBox[LogBox]

    PreInbox --1.scan--> CE
    CE --2.flush--> PreInbox
    CE <--> BackupBox
    CE --GeneralLog --> LogBox
    CE --BusinessErrors--> AlertLog
    CE <-.-> DB/API/SendGrid
```

### Programa específic

- Entrada out/api/DB
- Trigger via bat

```mermaid
flowchart TD
    External[(External)]
    PE((ProgramaEspecific))
    Outbox[Outbox]
    BackupBox[BackupBox]
    LogBox[LogBox]

    Outbox --read/scan--> PE <--> External
    SipOut --trigger --> PE
    PE <--> BackupBox
    PE <--> LogBox
    PE <-.-> DB/API/SendGrid

    Timer --trigger --> PE


```

### Connector

- @AzFn

- Endopoints UVE / External
- Sentit In o Out

**imports**

```mermaid

flowchart TD
    Connector(("
        Connector
        Orchestration
    "))
    ExernalAPIForIntegration[(ExernalAPI)]

    ExernalAPIForIntegration --fetch--> Connector
    Cloud -- trigger --> Connector
    Timer --trigger --> Connector
    SipOut --trigger --> Connector

    Connector --GeneralLog --> AzLogs
    Connector --BusinessErrors--> ApiAlertLog

    Connector --> Transform --> ?UveConverter --> Inbox
```

**exports**

```mermaid

flowchart TD
    Connector(("
        Connector
        Orchestration
    "))
    ExernalAPIForIntegration[(ExernalAPI)]

    Connector --GeneralLog --> AzLogs
    Connector --BusinessErrors--> ApiAlertLog

    Connector --integrationAck--> Inbox

    SipOut --post (payload&trigger) --> Connector
    Connector --push--> ExernalAPIForIntegration

```

### WebHook

- No access to DB nor FS
- Reactive
- @AzureFN

```mermaid
flowchart TD
    ExtAPI((ExtAPI))
    UveAPI((UveAPI))
    WebHook((WebHook))
    Cloud((Cloud))

    UveAPI-->WebHook
    ExtAPI-->WebHook
    Cloud--request(payload)-->WebHook
    WebHook--response(validationJson)-->Cloud
```

## Conclusions

- Els punts de contacte amb ConnectaSDK són pocs.
- Detectats 4 tipus base de projecte (2 locals/2 AzFN)
- Possibilitat de substituir projectes a AzFN de les plantilles a flux modular amb contractes (una instància, múltiples dll)
- Possibilitat d'extreure els projectes locals a AzFn: Caldria abstreure la gestió de fitxers i l'accés a DB.

## TODO

- Traslladar esquemes fotos
- Plantejar arquitectura modular (Connectors/WebHooks Sergio)
- Valoració funcionalitats AzFN vs AKS?
- Valorar AzFN com a solució definitiva (validar amb infra, preus, escalat, tunnels DB, blobs)
- Plantejar solucions per moure tot a AzFN (Solucions per accés a DB i abstracció de fitxers)

- Fer informe de conclusions JC
  - Què volem per Connecta SDK (Poca sinergia amb Connecta SDK)
  - Possibilitat de migrar Custom a pocs projectes escalables i modulars
  - Possibilitat de migrar tot a AzFN (o AKS?)

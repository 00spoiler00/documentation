# Channel

## Roles

## Schema

```mermaid

classDiagram

namespace Orchestration {
    class Conversor {
        <<Abstract>>
    }
    class CU {
        <<Service>>
    }
}

Conversor <|-- CUConversor


namespace Orchestration {

    class Orchestrator{
        <<Service>>
    }

    class Customer {
        int Id Pk
    }

    class Recipe {
        int Id Pk
        string Name
    }

    class Cook {
        int Id Pk
        datetime started_at
        datetime end_at
    }

    class Payload {
        int Id Pk
        string blob_id PK
        enum type "In/Mid/Out"
        datetime created_at
    }

    class Cook_Step {
        int Id Pk
        datetime started_at
        datetime end_at
        json payload
    }

    class Channel {
        int Id Pk
        string Name
    }

    class Worker {
        int Id Pk
        string Name
        string Queue
    }

    class Recipe_Step {
        int Id Pk
        int Order
        enum Type "Copy/Zip/Notify/Work/..."
        json payload
    }
}

Customer "1" -- "0..n" Recipe
Recipe "1" -- "0..n" Recipe_Step
Recipe_Step "1" -- "0..n" Channel
Recipe_Step "1" --> "0..1" Worker

Recipe "1" --> "0..n" Cook
Cook "1" --> "0..n" Cook_Step
Cook_Step "0..n" --> "1" Recipe_Step

namespace Storage {
    class InteractsWithStorage{
        <<Abstract>>
        GetContent(Identifier): Content
        PutContent(Content) : Identifier
    }

    class InteractsWithBlob{
        <<Interface>>
    }

    class InteractsWithFS{
        <<Interface>>
    }
}

InteractsWithStorage <|-- InteractsWithBlob
InteractsWithStorage <|-- InteractsWithFS

namespace Channels {

    class Channel{
        <<Abstract>>
        GetCustomer(): Customer
        GetRecipe(): Recipe()
        GetPayloadId(): int
    }
    class MailBoxChannel
    class FtpBoxChannel
    class RESTChannel
    class SOAPChannel
    class SFTPChannel

    class InChannel {
        pullData()
        triggerEvents()
    }
    class OutChannel{
        pushPayload
    }

}

InChannel <|-- SOAPChannel
OutChannel <|-- SOAPChannel
InChannel <|-- MailBoxChannel
InChannel <|-- FtpBoxChannel
InChannel <|-- RESTChannel

OutChannel <|-- SFTPChannel
OutChannel <|-- RESTChannel

Channel <|-- InChannel
Channel <|-- OutChannel
InteractsWithStorage <|-- Channel

```

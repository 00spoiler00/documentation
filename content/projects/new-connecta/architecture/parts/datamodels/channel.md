namespace Channel1 {

    class Channel{
        <<Abstract>>
        GetCustomer(): Customer
        GetRecipe(): Recipe
        GetPayloadId(): int
    }
    class MailBoxChannel
    class FtpBoxChannel
    class RESTChannel
    class SOAPChannel
    class SFTPChannel

    class InChannel {
        pullData(): Payload
        triggerEvents(): void
    }
    class OutChannel{
        pushPayload(): boolean
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

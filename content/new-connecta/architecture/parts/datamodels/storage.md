namespace Storage {
    class InteractsWithStorage{
        <<Abstract>>
        GetContent(Identifier): Content
        PutContent(Content) : Identifier
        UpdateContent(Identifier, Content) : Identifier
        GetMetadata(Identifier): Metadata
        SetMetadata(Identifier, Metadata): Boolean
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

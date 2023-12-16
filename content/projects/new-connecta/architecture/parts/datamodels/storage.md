namespace Storage {
    class InteractsWithStorage{
        GetContent(Identifier): Content
        PutContent(Content): Identifier
        UpdateContent(Identifier, Content): Identifier
        GetMetadata(Identifier): Metadata
        SetMetadata(Identifier, Metadata): Boolean
    }

    class InteractsWithBlob{
    }

    class InteractsWithFS{
    }
}

InteractsWithStorage <|-- InteractsWithBlob
InteractsWithStorage <|-- InteractsWithFS


# Dynamic content for SipIn Records

To allow the creation of dynamic documentation, there are some additional tools provided:

::: warning
Remember that the inclusions mentioned in this document are relative to the document you are inserting, path should be adjusted accordingly.
:::

## Full Records

You can use the tag ```<!--@include: ./_dynamicRecordDefinitions/all.md-->``` wherever you need it. It will insert the full SipIn Records definitions that will keep updated automatically if structures change.

## Templates

The same way you can insert the full record definition, you can discretionally create templates using different orders or reduced sets. As a convetion, templates should always start with a ```_```, for example ```_myTemplate.md```

Note that this templates may include additional markdown and formatting.

## Single Record

Finally, if you need to insert a single record, you can always use the form ```<!--@include: ./_dynamicRecordDefinitions/nameOFRecord.md-->```

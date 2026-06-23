# FyprMetadataKindEntry

Metadata entry for a single element kind: navigation links and field translations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Array&lt;FyprMetadataKindLinksInner&gt;**](FyprMetadataKindLinksInner.md) | Array of navigation links for an element kind (rel + href pairs). | [default to undefined]
**translations** | [**FyprMetadataKindTranslations**](FyprMetadataKindTranslations.md) |  | [default to undefined]

## Example

```typescript
import { FyprMetadataKindEntry } from 'golemio-public-transport-api';

const instance: FyprMetadataKindEntry = {
    links,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

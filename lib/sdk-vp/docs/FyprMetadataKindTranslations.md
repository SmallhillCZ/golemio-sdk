# FyprMetadataKindTranslations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**FyprMetadataKindTranslation**](FyprMetadataKindTranslation.md) |  | [default to undefined]
**attributes** | [**{ [key: string]: FyprMetadataFieldTranslation; }**](FyprMetadataFieldTranslation.md) | Map of English attribute slugs to their translation data. Keys are OG model attribute names; values contain the Czech slug and human-readable label. | [default to undefined]

## Example

```typescript
import { FyprMetadataKindTranslations } from 'golemio-public-transport-api';

const instance: FyprMetadataKindTranslations = {
    kind,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

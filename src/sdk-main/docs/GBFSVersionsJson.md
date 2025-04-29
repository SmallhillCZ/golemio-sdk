# GBFSVersionsJson

Lists all feed endpoints published according to version sof the GBFS documentation. (added in v1.1)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versions** | [**Array&lt;GBFSVersionsJsonVersionsInner&gt;**](GBFSVersionsJsonVersionsInner.md) | Contains one object, as defined below, for each of the available versions of a feed. The array must be sorted by increasing MAJOR and MINOR version number. | [default to undefined]

## Example

```typescript
import { GBFSVersionsJson } from 'golemio-api';

const instance: GBFSVersionsJson = {
    versions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

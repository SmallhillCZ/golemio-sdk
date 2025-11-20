# GBFSSystemInformationJsonRentalAppsAndroid

Contains rental app download and app discovery information for the Android platform. (added in v1.1)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store_uri** | **string** | URI where the rental Android app can be downloaded from (added in v1.1). | [default to undefined]
**discovery_uri** | **string** | URI that can be used to discover if the rental Android app is installed on the device (added in v1.1). | [default to undefined]

## Example

```typescript
import { GBFSSystemInformationJsonRentalAppsAndroid } from 'golemio-api';

const instance: GBFSSystemInformationJsonRentalAppsAndroid = {
    store_uri,
    discovery_uri,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# GBFSFreeBikeStatusJsonBikesInnerRentalUris

Contains rental uris for Android, iOS, and web in the android, ios, and web fields (added in v1.1).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android** | **string** | URI that can be passed to an Android app with an intent (added in v1.1). | [optional] [default to undefined]
**ios** | **string** | URI that can be used on iOS to launch the rental app for this vehicle (added in v1.1). | [optional] [default to undefined]
**web** | **string** | URL that can be used by a web browser to show more information about renting this vehicle (added in v1.1). | [optional] [default to undefined]

## Example

```typescript
import { GBFSFreeBikeStatusJsonBikesInnerRentalUris } from 'golemio-api';

const instance: GBFSFreeBikeStatusJsonBikesInnerRentalUris = {
    android,
    ios,
    web,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# PublicDeparture


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp_scheduled** | **string** |  | [default to undefined]
**timestamp_predicted** | **string** |  | [default to undefined]
**delay_seconds** | **number** | Delay in seconds | [optional] [default to undefined]
**minutes** | **number** | Minutes until the departure | [default to undefined]

## Example

```typescript
import { PublicDeparture } from 'golemio-public-transport-api';

const instance: PublicDeparture = {
    timestamp_scheduled,
    timestamp_predicted,
    delay_seconds,
    minutes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

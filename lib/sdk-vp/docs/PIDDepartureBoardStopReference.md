# PIDDepartureBoardStopReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | GTFS ID of the stop the vehicle is stopping at. | [default to undefined]
**platform_code** | **string** | For trains it is the platform number the train is stopping at. Is &#x60;null&#x60; if not known. For other modes of transport, returns the platform code from &#x60;stops[]&#x60;. | [default to undefined]

## Example

```typescript
import { PIDDepartureBoardStopReference } from 'golemio-public-transport-api';

const instance: PIDDepartureBoardStopReference = {
    id,
    platform_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

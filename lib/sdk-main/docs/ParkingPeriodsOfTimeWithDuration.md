# ParkingPeriodsOfTimeWithDuration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_in_week** | **string** | Day of the week. | [default to undefined]
**start** | **string** | Start time of the periods of time. | [default to undefined]
**end** | **string** | End time of the periods of time. | [default to undefined]
**ph** | **string** | Public holiday availability. | [default to undefined]
**maximum_duration** | **number** | Time in minutes. | [optional] [default to undefined]
**disc_parking** | **boolean** | Need to use a parking disc. | [optional] [default to undefined]

## Example

```typescript
import { ParkingPeriodsOfTimeWithDuration } from 'golemio-api';

const instance: ParkingPeriodsOfTimeWithDuration = {
    day_in_week,
    start,
    end,
    ph,
    maximum_duration,
    disc_parking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

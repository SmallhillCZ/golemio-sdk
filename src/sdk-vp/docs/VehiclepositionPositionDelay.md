# VehiclepositionPositionDelay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual** | **number** | Current delay, in seconds, based on actual location of a trip on its shape between stops | [optional] [default to undefined]
**last_stop_arrival** | **number** | Delay, in seconds, at the last confirmed stop on arrival. Null, if the arrival time to the last stop equal departure time | [optional] [default to undefined]
**last_stop_departure** | **number** | Delay, in seconds, at the last confirmed stop on departure. Null, if it was a terminal stop. | [optional] [default to undefined]

## Example

```typescript
import { VehiclepositionPositionDelay } from 'golemio-public-transport-api';

const instance: VehiclepositionPositionDelay = {
    actual,
    last_stop_arrival,
    last_stop_departure,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

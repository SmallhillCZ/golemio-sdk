# PIDDepartureBoardDeparture


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrival_timestamp** | [**PIDDepartureBoardStopTime**](PIDDepartureBoardStopTime.md) |  | [optional] [default to undefined]
**delay** | [**PIDDepartureBoardDelay**](PIDDepartureBoardDelay.md) |  | [optional] [default to undefined]
**departure_timestamp** | [**PIDDepartureBoardStopTime**](PIDDepartureBoardStopTime.md) |  | [optional] [default to undefined]
**last_stop** | [**PIDDepartureBoardLastStop**](PIDDepartureBoardLastStop.md) |  | [optional] [default to undefined]
**route** | [**PIDDepartureBoardRoute**](PIDDepartureBoardRoute.md) |  | [optional] [default to undefined]
**stop** | [**PIDDepartureBoardStopReference**](PIDDepartureBoardStopReference.md) |  | [optional] [default to undefined]
**trip** | [**PIDDepartureBoardTrip**](PIDDepartureBoardTrip.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PIDDepartureBoardDeparture } from 'golemio-public-transport-api';

const instance: PIDDepartureBoardDeparture = {
    arrival_timestamp,
    delay,
    departure_timestamp,
    last_stop,
    route,
    stop,
    trip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

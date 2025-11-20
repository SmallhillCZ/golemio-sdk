# VehiclepositionPositionLastStop

Properties for last stop passed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | GTFS Static identifier of the last stop passed on the route of the trip | [default to undefined]
**sequence** | **number** | Sequence number of the last stop passed on the route of the trip | [default to undefined]
**arrival_time** | **string** | Scheduled arrival time to the last passed stop (UTC) | [default to undefined]
**departure_time** | **string** | Scheduled departure time from the last passed stop (UTC) | [default to undefined]

## Example

```typescript
import { VehiclepositionPositionLastStop } from 'golemio-public-transport-api';

const instance: VehiclepositionPositionLastStop = {
    id,
    sequence,
    arrival_time,
    departure_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

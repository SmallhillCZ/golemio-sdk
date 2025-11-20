# VehiclepositionPositionNextStop

Properties of the next stop on the route of the trip

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | GTFS Static identifier of the next stop on the route of the trip | [default to undefined]
**sequence** | **number** | Sequence number of the next stop on the route of the trip | [default to undefined]
**arrival_time** | **string** | Scheduled arrival time of the next stop on the route of the trip | [default to undefined]
**departure_time** | **string** | Scheduled departure time of the next stop on the route of the trip | [default to undefined]

## Example

```typescript
import { VehiclepositionPositionNextStop } from 'golemio-public-transport-api';

const instance: VehiclepositionPositionNextStop = {
    id,
    sequence,
    arrival_time,
    departure_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

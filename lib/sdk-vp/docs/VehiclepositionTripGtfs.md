# VehiclepositionTripGtfs

All properties tied with GTFS data format

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**route_id** | **string** | Identifier of the owner route in the GTFS Static feed | [default to undefined]
**route_short_name** | **string** | Identification of the line used for the public | [default to undefined]
**route_type** | **number** | Identifier of the route type in the GTFS Static feed | [default to undefined]
**trip_id** | **string** | Identifier of the trip in the GTFS Static feed | [default to undefined]
**trip_headsign** | **string** | Heading of the trip (identical to what is shown on the bus) | [optional] [default to undefined]

## Example

```typescript
import { VehiclepositionTripGtfs } from 'golemio-public-transport-api';

const instance: VehiclepositionTripGtfs = {
    route_id,
    route_short_name,
    route_type,
    trip_id,
    trip_headsign,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

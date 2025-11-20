# ScopeInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gtfs_trip_id** | **string** |  | [optional] [default to undefined]
**route_type** | **string** |  | [optional] [default to undefined]
**route_short_name** | **string** |  | [optional] [default to undefined]
**shape_id** | **string** |  | [optional] [default to undefined]
**origin_route_name** | **string** |  | [optional] [default to undefined]
**run_number** | **number** |  | [optional] [default to undefined]
**trip_headsign** | **string** |  | [optional] [default to undefined]
**geometry** | [**GeometryPoint**](GeometryPoint.md) |  | [optional] [default to undefined]
**shape_dist_traveled** | **number** | Distance travelled from the first stop of the trip. | [optional] [default to undefined]
**bearing** | **number** | Bearing of the vehicle in degrees (0-360). | [optional] [default to undefined]
**delay** | **number** | Delay of the vehicle in seconds. | [optional] [default to undefined]
**state_position** | [**StatePosition**](StatePosition.md) |  | [optional] [default to undefined]
**last_stop_sequence** | **number** | index of last stop passed by the vehicle | [optional] [default to undefined]
**origin_timestamp** | **string** | time when vehicle send last update | [optional] [default to undefined]

## Example

```typescript
import { ScopeInfo } from 'golemio-public-transport-api';

const instance: ScopeInfo = {
    gtfs_trip_id,
    route_type,
    route_short_name,
    shape_id,
    origin_route_name,
    run_number,
    trip_headsign,
    geometry,
    shape_dist_traveled,
    bearing,
    delay,
    state_position,
    last_stop_sequence,
    origin_timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

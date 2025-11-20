# VehiclePositionsFeatureProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gtfs_trip_id** | **string** |  | [default to undefined]
**route_type** | **string** |  | [default to undefined]
**gtfs_route_short_name** | **string** |  | [default to undefined]
**bearing** | **number** |  | [optional] [default to undefined]
**delay** | **number** |  | [optional] [default to undefined]
**vehicle_id** | **string** |  | [optional] [default to undefined]
**state_position** | [**StatePosition**](StatePosition.md) |  | [optional] [default to undefined]

## Example

```typescript
import { VehiclePositionsFeatureProperties } from 'golemio-public-transport-api';

const instance: VehiclePositionsFeatureProperties = {
    gtfs_trip_id,
    route_type,
    gtfs_route_short_name,
    bearing,
    delay,
    vehicle_id,
    state_position,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

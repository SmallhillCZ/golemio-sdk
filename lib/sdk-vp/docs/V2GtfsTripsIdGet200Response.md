# V2GtfsTripsIdGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trip_id** | **string** |  | [default to undefined]
**bikes_allowed** | **number** |  | [default to undefined]
**block_id** | **string** |  | [optional] [default to undefined]
**direction_id** | **number** |  | [optional] [default to undefined]
**exceptional** | **number** |  | [optional] [default to undefined]
**last_modify** | **string** |  | [optional] [default to undefined]
**route_id** | **string** |  | [default to undefined]
**service_id** | **string** |  | [default to undefined]
**shape_id** | **string** |  | [default to undefined]
**trip_headsign** | **string** |  | [default to undefined]
**wheelchair_accessible** | **number** |  | [default to undefined]
**stop_times** | [**Array&lt;GTFSStopTime&gt;**](GTFSStopTime.md) |  | [optional] [default to undefined]
**shapes** | [**Array&lt;V2GtfsTripsIdGet200ResponseAllOfShapesInner&gt;**](V2GtfsTripsIdGet200ResponseAllOfShapesInner.md) |  | [optional] [default to undefined]
**service** | [**GTFSService**](GTFSService.md) |  | [optional] [default to undefined]
**route** | [**GTFSRoute**](GTFSRoute.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2GtfsTripsIdGet200Response } from 'golemio-public-transport-api';

const instance: V2GtfsTripsIdGet200Response = {
    trip_id,
    bikes_allowed,
    block_id,
    direction_id,
    exceptional,
    last_modify,
    route_id,
    service_id,
    shape_id,
    trip_headsign,
    wheelchair_accessible,
    stop_times,
    shapes,
    service,
    route,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# InformedEntityRoute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of the route as informed by VYMI | [default to undefined]
**route_id** | **string** | GTFS route_id resolved from the route_details snapshot (or, for legacy rows, from GTFS data) | [default to undefined]
**route_short_name** | **string** |  | [default to undefined]
**route_long_name** | **string** |  | [default to undefined]
**route_type** | [**RouteType**](RouteType.md) |  | [default to undefined]

## Example

```typescript
import { InformedEntityRoute } from 'golemio-public-transport-api';

const instance: InformedEntityRoute = {
    id,
    route_id,
    route_short_name,
    route_long_name,
    route_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

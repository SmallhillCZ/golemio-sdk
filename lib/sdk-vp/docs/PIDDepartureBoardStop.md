# PIDDepartureBoardStop


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level_id** | **string** | Level of metro stops. | [default to undefined]
**location_type** | **number** | Describes the type of stop, is always &#x60;0&#x60;. | [default to undefined]
**parent_station** | **string** | A GTFS identifier of the parent station for metro platforms. | [default to undefined]
**platform_code** | **string** | Human-friendly code used to distinguish a stop inside a node. Multiple GTFS codes can share a platform code. | [default to undefined]
**stop_lat** | **number** | Latitude of the stop marker or the center of metro or train station platform. | [default to undefined]
**stop_lon** | **number** | Longitude of the stop marker or the center of metro or train station platform. | [default to undefined]
**asw_id** | [**ASWid**](ASWid.md) |  | [default to undefined]
**stop_id** | **string** | GTFS ID of the stop. Stops that will be valid in the future have the date of the start of their validity appended, i.e. &#x60;U476Z51P_210401&#x60;. | [default to undefined]
**stop_name** | **string** | Name of the stop. | [default to undefined]
**wheelchair_boarding** | **number** | Indicates accessibility of the stop by wheelchairs. &#x60;0&#x60; – unknown, &#x60;1&#x60; – accessible, &#x60;2&#x60; – inaccessible | [default to undefined]
**zone_id** | **string** | PID fare zone. Multiple zones are separated by a comma. | [default to undefined]

## Example

```typescript
import { PIDDepartureBoardStop } from 'golemio-public-transport-api';

const instance: PIDDepartureBoardStop = {
    level_id,
    location_type,
    parent_station,
    platform_code,
    stop_lat,
    stop_lon,
    asw_id,
    stop_id,
    stop_name,
    wheelchair_boarding,
    zone_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

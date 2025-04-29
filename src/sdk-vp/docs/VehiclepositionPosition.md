# VehiclepositionPosition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearing** | **number** | Bearing, in degrees (0 &#x3D; north, 90 &#x3D; east, 180 &#x3D; south, 270 &#x3D; west) | [default to undefined]
**delay** | [**VehiclepositionPositionDelay**](VehiclepositionPositionDelay.md) |  | [optional] [default to undefined]
**last_stop** | [**VehiclepositionPositionLastStop**](VehiclepositionPositionLastStop.md) |  | [optional] [default to undefined]
**next_stop** | [**VehiclepositionPositionNextStop**](VehiclepositionPositionNextStop.md) |  | [optional] [default to undefined]
**is_canceled** | **boolean** | True, if the trip was canceled. Other fields about the position have non-defined values in case this value is true | [default to undefined]
**origin_timestamp** | **string** | Time at which the position was sent from the vehicle (UTC) | [default to undefined]
**speed** | **number** | Current speed of the vehicle (kilometers per hour) | [optional] [default to undefined]
**shape_dist_traveled** | **string** | Number of kilometers traveled on the route | [optional] [default to undefined]
**tracking** | **boolean** | True if trip is tracked, meaning that trip is on its track. | [optional] [default to undefined]

## Example

```typescript
import { VehiclepositionPosition } from 'golemio-public-transport-api';

const instance: VehiclepositionPosition = {
    bearing,
    delay,
    last_stop,
    next_stop,
    is_canceled,
    origin_timestamp,
    speed,
    shape_dist_traveled,
    tracking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

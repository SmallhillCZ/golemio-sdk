# GBFSFreeBikeStatusJsonBikesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bike_id** | **string** | Rotating (as of v2.0) identifier of a vehicle. | [default to undefined]
**lat** | **number** | The latitude of the vehicle. | [optional] [default to undefined]
**lon** | **number** | The longitude of the vehicle. | [optional] [default to undefined]
**is_reserved** | **boolean** | Is the vehicle currently reserved? | [default to undefined]
**is_disabled** | **boolean** | Is the vehicle currently disabled (broken)? | [default to undefined]
**rental_uris** | [**GBFSFreeBikeStatusJsonBikesInnerRentalUris**](GBFSFreeBikeStatusJsonBikesInnerRentalUris.md) |  | [optional] [default to undefined]
**vehicle_type_id** | **string** | The vehicle_type_id of this vehicle (added in v2.1-RC). | [optional] [default to undefined]
**vahicle_type** | [**GBFSFreeBikeStatusJsonBikesInnerVahicleType**](GBFSFreeBikeStatusJsonBikesInnerVahicleType.md) |  | [optional] [default to undefined]
**last_reported** | **number** | The last time this vehicle reported its status to the operator\&#39;s backend in POSIX time (added in v2.1-RC). | [optional] [default to undefined]
**current_range_meters** | **number** | The furthest distance in meters that the vehicle can travel without recharging or refueling with the vehicle\&#39;s current charge or fuel (added in v2.1-RC). | [optional] [default to undefined]
**charge_percent** | **number** | REQUIRED only if the vehicle is using nonhuman fuel type and measures the remaining fuel capacity. | [optional] [default to undefined]
**station_id** | **string** | Identifier referencing the station_id if the vehicle is currently at a station (added in v2.1-RC2). | [optional] [default to undefined]
**pricing_plan_id** | **string** | The plan_id of the pricing plan this vehicle is eligible for (added in v2.1-RC2). | [optional] [default to undefined]
**make** | **string** | The name of the vehicle manufacturer. (added in OICT fork) | [optional] [default to undefined]
**model** | **string** | The name of the vehicle model. (added in OICT fork) | [optional] [default to undefined]
**color** | **string** | The color of the vehicle. (added in OICT fork) | [optional] [default to undefined]

## Example

```typescript
import { GBFSFreeBikeStatusJsonBikesInner } from 'golemio-api';

const instance: GBFSFreeBikeStatusJsonBikesInner = {
    bike_id,
    lat,
    lon,
    is_reserved,
    is_disabled,
    rental_uris,
    vehicle_type_id,
    vahicle_type,
    last_reported,
    current_range_meters,
    charge_percent,
    station_id,
    pricing_plan_id,
    make,
    model,
    color,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

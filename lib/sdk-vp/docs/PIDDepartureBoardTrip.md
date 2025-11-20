# PIDDepartureBoardTrip


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **string** | The equivalent of arrows that are printed on stop signs. Indicates the direction the vehicle will continue at stops where routes split up relative to the direction of motion of the vehicle. Valid values: &#x60;null&#x60; (do not display the arrow), &#x60;top&#x60;, &#x60;top-right&#x60;, &#x60;right&#x60;, &#x60;bottom-right&#x60;, &#x60;bottom&#x60;, &#x60;bottom-left&#x60;, &#x60;left&#x60;, &#x60;top-left&#x60;. | [default to undefined]
**headsign** | **string** | Trip headsign (usually the final stop). | [default to undefined]
**id** | **string** | GTFS trip ID. | [default to undefined]
**is_at_stop** | **boolean** | True if vehicle is physically present in the stop. Applicable only to connections with delay available. | [default to undefined]
**is_canceled** | **boolean** | True if the trip is canceled. | [default to undefined]
**is_wheelchair_accessible** | **boolean** | True if the vehicle being used on this trip is wheelchair accessible. Metro trips are deemed accessible if the station is accessible. | [default to undefined]
**is_air_conditioned** | **boolean** | Determines whether the vehicle has air conditioning. If &#x60;null&#x60;, the information is not available or the vehicle\&#39;s registration number is not known. | [default to undefined]
**short_name** | **string** | The number of a particular train, otherwise &#x60;null&#x60;. | [default to undefined]

## Example

```typescript
import { PIDDepartureBoardTrip } from 'golemio-public-transport-api';

const instance: PIDDepartureBoardTrip = {
    direction,
    headsign,
    id,
    is_at_stop,
    is_canceled,
    is_wheelchair_accessible,
    is_air_conditioned,
    short_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

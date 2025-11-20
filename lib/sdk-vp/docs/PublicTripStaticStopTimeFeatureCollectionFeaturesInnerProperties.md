# PublicTripStaticStopTimeFeatureCollectionFeaturesInnerProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stop_name** | **string** |  | [optional] [default to undefined]
**stop_sequence** | **number** |  | [optional] [default to undefined]
**zone_id** | **string** |  | [optional] [default to undefined]
**is_wheelchair_accessible** | **boolean** |  | [optional] [default to undefined]
**shape_dist_traveled** | **number** |  | [optional] [default to undefined]
**arrival_time** | **string** | Time for arrival to the stop according to trip schedule. | [optional] [default to undefined]
**departure_time** | **string** | Time for departure from the stop according to trip schedule. | [optional] [default to undefined]

## Example

```typescript
import { PublicTripStaticStopTimeFeatureCollectionFeaturesInnerProperties } from 'golemio-public-transport-api';

const instance: PublicTripStaticStopTimeFeatureCollectionFeaturesInnerProperties = {
    stop_name,
    stop_sequence,
    zone_id,
    is_wheelchair_accessible,
    shape_dist_traveled,
    arrival_time,
    departure_time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

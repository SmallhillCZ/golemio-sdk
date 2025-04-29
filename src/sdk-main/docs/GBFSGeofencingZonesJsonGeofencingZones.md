# GBFSGeofencingZonesJsonGeofencingZones

Each geofenced zone and its associated rules and attributes is described as an object within the array of features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | FeatureCollection as per IETF RFC 7946. | [default to undefined]
**features** | [**Array&lt;GeoJSONFeature&gt;**](GeoJSONFeature.md) | Array of objects. | [default to undefined]

## Example

```typescript
import { GBFSGeofencingZonesJsonGeofencingZones } from 'golemio-api';

const instance: GBFSGeofencingZonesJsonGeofencingZones = {
    type,
    features,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

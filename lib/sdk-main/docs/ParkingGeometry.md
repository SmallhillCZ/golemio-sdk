# ParkingGeometry

GeoJSON geometry of the parking location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of geometry (GeoJSON Point, Polygon, MultiPolygon). | [optional] [default to undefined]
**coordinates** | [**ParkingGeometryCoordinates**](ParkingGeometryCoordinates.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ParkingGeometry } from 'golemio-api';

const instance: ParkingGeometry = {
    type,
    coordinates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

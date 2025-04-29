# ParkingSpaceGeometry

GeoJSON geometry of the parking space.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of geometry (GeoJSON Point, Polygon, MultiPolygon). | [optional] [default to undefined]
**coordinates** | [**ParkingGeometryCoordinates**](ParkingGeometryCoordinates.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ParkingSpaceGeometry } from 'golemio-api';

const instance: ParkingSpaceGeometry = {
    type,
    coordinates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

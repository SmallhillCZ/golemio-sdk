# ParkingMachineGeometry

GeoJSON geometry of the parking machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of geometry (GeoJSON Point, Polygon, MultiPolygon). | [optional] [default to undefined]
**coordinates** | [**ParkingGeometryCoordinates**](ParkingGeometryCoordinates.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ParkingMachineGeometry } from 'golemio-api';

const instance: ParkingMachineGeometry = {
    type,
    coordinates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

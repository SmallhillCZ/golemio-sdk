# NullableFeaturePoint

A GeoJSON Feature whose coordinates may be [null, null] when the vehicle\'s exact position is not yet known (e.g. a not-yet-tracked connecting trip)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geometry** | [**NullableGeometryPoint**](NullableGeometryPoint.md) |  | [default to undefined]
**properties** | **object** |  | [default to undefined]
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { NullableFeaturePoint } from 'golemio-public-transport-api';

const instance: NullableFeaturePoint = {
    geometry,
    properties,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

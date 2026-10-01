# NullableGeometryPoint

GeoJson point whose coordinates may be [null, null] when the vehicle\'s exact position is not yet known (e.g. a not-yet-tracked connecting trip)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinates** | **Array&lt;number | null&gt;** | Point | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { NullableGeometryPoint } from 'golemio-public-transport-api';

const instance: NullableGeometryPoint = {
    coordinates,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

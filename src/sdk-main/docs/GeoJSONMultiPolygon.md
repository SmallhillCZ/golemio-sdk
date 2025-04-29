# GeoJSONMultiPolygon

A polygon that describes where rides might not be able to start, end, go through, or have other limitations. Must follow the right-hand rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**coordinates** | **Array&lt;Array&lt;Array&lt;Array&lt;number&gt;&gt;&gt;&gt;** |  | [default to undefined]

## Example

```typescript
import { GeoJSONMultiPolygon } from 'golemio-api';

const instance: GeoJSONMultiPolygon = {
    type,
    coordinates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

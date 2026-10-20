# GTFSLevel

See GTFS Schedule Reference for [levels.txt](https://gtfs.org/documentation/schedule/reference/#levelstxt).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level_id** | **string** |  | [default to undefined]
**level_index** | **number** | Numeric index of the level that indicates its relative position. Ground level is 0. | [default to undefined]
**level_name** | **string** |  | [default to undefined]

## Example

```typescript
import { GTFSLevel } from 'golemio-public-transport-api';

const instance: GTFSLevel = {
    level_id,
    level_index,
    level_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

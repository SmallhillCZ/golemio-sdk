# GTFSPathway

See GTFS Schedule Reference for [pathways.txt](https://gtfs.org/documentation/schedule/reference/#pathwaystxt).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pathway_id** | **string** |  | [default to undefined]
**from_stop_id** | **string** |  | [default to undefined]
**to_stop_id** | **string** |  | [default to undefined]
**pathway_mode** | **number** | 1 &#x3D; walkway, 2 &#x3D; stairs, 3 &#x3D; moving sidewalk/travelator, 4 &#x3D; escalator, 5 &#x3D; elevator, 6 &#x3D; fare gate, 7 &#x3D; exit gate | [default to undefined]
**is_bidirectional** | **number** | 0 &#x3D; unidirectional (from &#x60;from_stop_id&#x60; to &#x60;to_stop_id&#x60; only), 1 &#x3D; bidirectional | [default to undefined]
**length** | **number** | Horizontal length in meters. | [default to undefined]
**traversal_time** | **number** | Average time in seconds needed to walk through the pathway. | [default to undefined]
**stair_count** | **number** | Number of stairs, positive when going up from &#x60;from_stop_id&#x60; to &#x60;to_stop_id&#x60;, negative when going down. | [default to undefined]
**max_slope** | **number** | Maximum slope ratio of the pathway. | [default to undefined]
**min_width** | **number** | Minimum width of the pathway in meters. | [default to undefined]
**signposted_as** | **string** | Public facing text from physical signage visible to riders. | [default to undefined]
**reversed_signposted_as** | **string** | Same as &#x60;signposted_as&#x60;, but when the pathway is used from &#x60;to_stop_id&#x60; to &#x60;from_stop_id&#x60;. | [default to undefined]
**bikes_prohibited** | **number** | 0 &#x3D; bicycles allowed, 1 &#x3D; bicycles prohibited. A PID extension of GTFS. | [default to undefined]

## Example

```typescript
import { GTFSPathway } from 'golemio-public-transport-api';

const instance: GTFSPathway = {
    pathway_id,
    from_stop_id,
    to_stop_id,
    pathway_mode,
    is_bidirectional,
    length,
    traversal_time,
    stair_count,
    max_slope,
    min_width,
    signposted_as,
    reversed_signposted_as,
    bikes_prohibited,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

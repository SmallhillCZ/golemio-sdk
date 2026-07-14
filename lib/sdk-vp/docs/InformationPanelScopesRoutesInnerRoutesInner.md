# InformationPanelScopesRoutesInnerRoutesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stop_id** | **string** | Stop identifier in THMP registry. | [default to undefined]
**route_type** | **number** | GTFS route type (0 &#x3D; tram, 1 &#x3D; metro, 3 &#x3D; bus, etc.). | [default to undefined]
**route_short_name** | **string** | Short name of the route. | [default to undefined]
**route_id** | **string** | GTFS route identifier (e.g. L22 for tram 22, L991 for metro A, L992 for metro B). | [default to undefined]

## Example

```typescript
import { InformationPanelScopesRoutesInnerRoutesInner } from 'golemio-public-transport-api';

const instance: InformationPanelScopesRoutesInnerRoutesInner = {
    stop_id,
    route_type,
    route_short_name,
    route_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

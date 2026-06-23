# InformationPanelScopesRoutesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**route_name** | **string** | Name of the preset (matches the presets array value). | [default to undefined]
**note** | **string** | Note describing the preset. | [default to undefined]
**is_testing** | **boolean** | Whether this preset is a testing preset. | [default to undefined]
**routes** | [**Array&lt;InformationPanelScopesRoutesInnerRoutesInner&gt;**](InformationPanelScopesRoutesInnerRoutesInner.md) | Routes serving stops in this preset. | [default to undefined]

## Example

```typescript
import { InformationPanelScopesRoutesInner } from 'golemio-public-transport-api';

const instance: InformationPanelScopesRoutesInner = {
    route_name,
    note,
    is_testing,
    routes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

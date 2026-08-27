# InformationPanelScopes

Additional resources included when ?scopes=routes or ?scopes=device_status is requested. routes is present only when the panel has presets with associated routes; device_status is present (possibly null) whenever ?scopes=device_status is requested.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_status** | [**DeviceStatus**](DeviceStatus.md) | Latest DCIP status for the panel\&#39;s device_id, or null when no status has been reported for that device. Only present when ?scopes&#x3D;device_status is requested. | [optional] [default to undefined]
**routes** | [**Array&lt;InformationPanelScopesRoutesInner&gt;**](InformationPanelScopesRoutesInner.md) | Preset routes grouped by preset name. | [optional] [default to undefined]

## Example

```typescript
import { InformationPanelScopes } from 'golemio-public-transport-api';

const instance: InformationPanelScopes = {
    device_status,
    routes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

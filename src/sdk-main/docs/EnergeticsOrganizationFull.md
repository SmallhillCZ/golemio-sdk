# EnergeticsOrganizationFull


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**created_by_id** | **string** |  | [optional] [default to undefined]
**grafana_url** | **string** |  | [optional] [default to undefined]
**address** | [**EnergeticsAddress**](EnergeticsAddress.md) |  | [optional] [default to undefined]
**responsible_user** | [**Array&lt;EnergeticsUser&gt;**](EnergeticsUser.md) |  | [optional] [default to undefined]
**buildings** | [**Array&lt;EnergeticsBuildingShort&gt;**](EnergeticsBuildingShort.md) |  | [optional] [default to undefined]
**link** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsOrganizationFull } from 'golemio-api';

const instance: EnergeticsOrganizationFull = {
    id,
    name,
    label,
    category,
    created_by_id,
    grafana_url,
    address,
    responsible_user,
    buildings,
    link,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

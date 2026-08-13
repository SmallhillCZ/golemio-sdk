# EnergeticsEnoBuildingDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **string** |  | [optional] [default to undefined]
**building** | [**EnergeticsEnoBuildingDetailBuilding**](EnergeticsEnoBuildingDetailBuilding.md) |  | [optional] [default to undefined]
**property** | [**EnergeticsEnoBuildingDetailProperty**](EnergeticsEnoBuildingDetailProperty.md) |  | [optional] [default to undefined]
**addresses** | [**Array&lt;EnergeticsEnoBuildingDetailAddressesInner&gt;**](EnergeticsEnoBuildingDetailAddressesInner.md) |  | [optional] [default to undefined]
**energy_management** | [**EnergeticsEnoBuildingDetailEnergyManagement**](EnergeticsEnoBuildingDetailEnergyManagement.md) |  | [optional] [default to undefined]
**consumption_points** | [**Array&lt;EnergeticsEnoConsumptionPoint&gt;**](EnergeticsEnoConsumptionPoint.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoBuildingDetail } from 'golemio-api';

const instance: EnergeticsEnoBuildingDetail = {
    gid,
    building,
    property,
    addresses,
    energy_management,
    consumption_points,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

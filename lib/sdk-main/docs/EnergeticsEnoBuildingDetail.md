# EnergeticsEnoBuildingDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **string** |  | [optional] [default to undefined]
**name** | **string** | Display name of the building: &#x60;building.nazev&#x60;, then the Porsenna building name, then null. &#x60;building&#x60; is null for a substantial share of GIDs and the card still has to render a header, so the fallback is resolved here — the same chain the search endpoint uses — rather than in every client, where the versions would disagree. | [optional] [default to undefined]
**address** | **string** | Main address of the building: the first described &#x60;addresses[]&#x60; entry (they are ordered main-address first), then the Porsenna address, then null. | [optional] [default to undefined]
**building** | [**EnergeticsEnoBuildingDetailBuilding**](EnergeticsEnoBuildingDetailBuilding.md) |  | [optional] [default to undefined]
**property** | [**EnergeticsEnoBuildingDetailProperty**](EnergeticsEnoBuildingDetailProperty.md) |  | [optional] [default to undefined]
**addresses** | [**Array&lt;EnergeticsEnoBuildingDetailAddressesInner&gt;**](EnergeticsEnoBuildingDetailAddressesInner.md) |  | [optional] [default to undefined]
**energy_management** | [**EnergeticsEnoBuildingDetailEnergyManagement**](EnergeticsEnoBuildingDetailEnergyManagement.md) |  | [optional] [default to undefined]
**consumption_history** | [**EnergeticsEnoConsumptionHistory**](EnergeticsEnoConsumptionHistory.md) |  | [optional] [default to undefined]
**consumption_points** | [**Array&lt;EnergeticsEnoConsumptionPoint&gt;**](EnergeticsEnoConsumptionPoint.md) |  | [optional] [default to undefined]
**heat_sources** | [**EnergeticsEnoHeatSources**](EnergeticsEnoHeatSources.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoBuildingDetail } from 'golemio-api';

const instance: EnergeticsEnoBuildingDetail = {
    gid,
    name,
    address,
    building,
    property,
    addresses,
    energy_management,
    consumption_history,
    consumption_points,
    heat_sources,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

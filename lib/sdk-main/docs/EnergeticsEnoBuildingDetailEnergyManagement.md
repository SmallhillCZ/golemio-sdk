# EnergeticsEnoBuildingDetailEnergyManagement

Porsenna (e-manazer) tracking summary; null when the building is not tracked there

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **string** |  | [optional] [default to undefined]
**building_name** | **string** |  | [optional] [default to undefined]
**address** | **string** |  | [optional] [default to undefined]
**devices_total** | **number** |  | [optional] [default to undefined]
**devices_active** | **number** |  | [optional] [default to undefined]
**data_to** | **string** | Most recent date any of this building\&#39;s Porsenna devices reported; null when none of them has consumption. Porsenna aggregates carry a covered-day count rather than a reading timestamp, so this is the period start plus its covered days, clamped to the end of the period. A meter count without an as-of date is a claim with no expiry. | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoBuildingDetailEnergyManagement } from 'golemio-api';

const instance: EnergeticsEnoBuildingDetailEnergyManagement = {
    source,
    building_name,
    address,
    devices_total,
    devices_active,
    data_to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

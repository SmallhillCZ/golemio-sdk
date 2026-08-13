# EnergeticsEnoBuildingDetailBuilding

All available eno_budova attributes (Czech identifiers mirror the upstream ENO source). Null when the GID has no ENO building record and is known only through the consumption-point mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zdroj** | **string** |  | [optional] [default to undefined]
**nazev** | **string** |  | [optional] [default to undefined]
**oznaceni** | **string** |  | [optional] [default to undefined]
**druh_vytapeni** | **string** |  | [optional] [default to undefined]
**pripojka_elektro** | **string** |  | [optional] [default to undefined]
**pripojka_voda** | **string** |  | [optional] [default to undefined]
**pripojka_kanalizace** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoBuildingDetailBuilding } from 'golemio-api';

const instance: EnergeticsEnoBuildingDetailBuilding = {
    zdroj,
    nazev,
    oznaceni,
    druh_vytapeni,
    pripojka_elektro,
    pripojka_voda,
    pripojka_kanalizace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

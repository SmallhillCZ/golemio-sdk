# EnergeticsEnoBuildingDetailProperty

ENO lookup data (eno_ciselnik_*) resolved through the building\'s eno_majetek record. Null when the building has no majetek record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registration_unit** | [**EnergeticsEnoRegistrationUnit**](EnergeticsEnoRegistrationUnit.md) | Evidenční jednotka (eno_ciselnik_evidencni_jednotka). | [optional] [default to undefined]
**department** | [**EnergeticsEnoRegistrationUnit**](EnergeticsEnoRegistrationUnit.md) | Odbor spravující budovu: hlavní evidenční jednotka registrační jednotky (kod_maj_evidencni_jednotka_hl), nebo registrační jednotka samotná, pokud žádnou hlavní jednotku nemá (tedy pokud je sama odborem). | [optional] [default to undefined]
**managers** | [**EnergeticsEnoBuildingDetailPropertyManagers**](EnergeticsEnoBuildingDetailPropertyManagers.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EnergeticsEnoBuildingDetailProperty } from 'golemio-api';

const instance: EnergeticsEnoBuildingDetailProperty = {
    registration_unit,
    department,
    managers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

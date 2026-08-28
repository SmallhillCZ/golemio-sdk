# EnergeticsEnoBuildingDetailBuilding

All available eno_budova attributes (Czech identifiers mirror the upstream ENO source). Null when the GID has no ENO building record and is known only through the consumption-point mapping. Every property below is always present when the object is; `additionalProperties` stays open so an upstream ENO addition is not breaking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zdroj** | **string** | ENO source system the row was read from (mhmp / stat). | [optional] [default to undefined]
**nazev** | **string** |  | [optional] [default to undefined]
**oznaceni** | **string** |  | [optional] [default to undefined]
**druh_vytapeni** | **string** | Heating type as recorded in ENO. | [optional] [default to undefined]
**pripojka_elektro** | **string** |  | [optional] [default to undefined]
**pripojka_voda** | **string** |  | [optional] [default to undefined]
**pripojka_kanalizace** | **string** |  | [optional] [default to undefined]
**budova_rozdelena_byt_nebyt** | **string** |  | [optional] [default to undefined]
**celkova_plocha_budova** | **number** | Total floor area, m². | [optional] [default to undefined]
**celkova_plocha_byt_budova** | **number** |  | [optional] [default to undefined]
**celkova_plocha_nebyt_budova** | **number** |  | [optional] [default to undefined]
**zastavena_plocha** | **number** | Built-up area, m². | [optional] [default to undefined]
**obestaveny_prostor** | **number** | Enclosed volume, m³. | [optional] [default to undefined]
**pocet_byt** | **number** |  | [optional] [default to undefined]
**pocet_nebyt_budova** | **number** |  | [optional] [default to undefined]
**pocet_nadzem_podlazi** | **number** |  | [optional] [default to undefined]
**pocet_podzem_podlazi** | **number** |  | [optional] [default to undefined]
**pocet_podkrovi** | **number** |  | [optional] [default to undefined]
**vytah** | **boolean** |  | [optional] [default to undefined]
**czcc** | **number** |  | [optional] [default to undefined]
**id_cuzk** | **number** |  | [optional] [default to undefined]
**id_objekt** | **number** |  | [optional] [default to undefined]
**kod_vyuziti** | **string** |  | [optional] [default to undefined]
**nazev_vyuziti** | **string** |  | [optional] [default to undefined]
**kod_ochrana** | **string** |  | [optional] [default to undefined]
**nazev_ochrana** | **string** |  | [optional] [default to undefined]
**platnost_od** | **string** |  | [optional] [default to undefined]

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
    budova_rozdelena_byt_nebyt,
    celkova_plocha_budova,
    celkova_plocha_byt_budova,
    celkova_plocha_nebyt_budova,
    zastavena_plocha,
    obestaveny_prostor,
    pocet_byt,
    pocet_nebyt_budova,
    pocet_nadzem_podlazi,
    pocet_podzem_podlazi,
    pocet_podkrovi,
    vytah,
    czcc,
    id_cuzk,
    id_objekt,
    kod_vyuziti,
    nazev_vyuziti,
    kod_ochrana,
    nazev_ochrana,
    platnost_od,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

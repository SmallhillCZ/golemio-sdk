# TrafficRestrictionsSituationRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**situationRecordCreationTime** | **string** |  | [optional] [default to undefined]
**situationRecordVersionTime** | **string** |  | [optional] [default to undefined]
**startTime** | **string** |  | [optional] [default to undefined]
**endTime** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]
**generalPublicComment** | [**TrafficRestrictionsSituationRecordGeneralPublicComment**](TrafficRestrictionsSituationRecordGeneralPublicComment.md) |  | [optional] [default to undefined]
**sourceName** | **string** |  | [optional] [default to undefined]
**impact** | [**TrafficRestrictionsSituationRecordImpact**](TrafficRestrictionsSituationRecordImpact.md) |  | [optional] [default to undefined]
**forVehiclesWithCharacteristicsOf** | [**TrafficRestrictionsSituationRecordForVehiclesWithCharacteristicsOf**](TrafficRestrictionsSituationRecordForVehiclesWithCharacteristicsOf.md) |  | [optional] [default to undefined]
**alertCLinear** | [**TrafficRestrictionsSituationRecordAlertCLinear**](TrafficRestrictionsSituationRecordAlertCLinear.md) |  | [optional] [default to undefined]
**osmPath** | **Array&lt;Array&lt;number&gt;&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { TrafficRestrictionsSituationRecord } from 'golemio-api';

const instance: TrafficRestrictionsSituationRecord = {
    situationRecordCreationTime,
    situationRecordVersionTime,
    startTime,
    endTime,
    type,
    version,
    generalPublicComment,
    sourceName,
    impact,
    forVehiclesWithCharacteristicsOf,
    alertCLinear,
    osmPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

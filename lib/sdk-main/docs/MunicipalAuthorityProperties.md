# MunicipalAuthorityProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**MunicipalAuthorityPropertiesImage**](MunicipalAuthorityPropertiesImage.md) |  | [optional] [default to undefined]
**email** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**telephone** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**web** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**address** | [**GardenPropertiesAddress**](GardenPropertiesAddress.md) |  | [optional] [default to undefined]
**agendas** | [**Array&lt;MunicipalAuthorityPropertiesAgendasInner&gt;**](MunicipalAuthorityPropertiesAgendasInner.md) |  | [optional] [default to undefined]
**district** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**official_board** | **string** |  | [optional] [default to undefined]
**opening_hours** | [**Array&lt;MunicipalAuthorityPropertiesOpeningHoursInner&gt;**](MunicipalAuthorityPropertiesOpeningHoursInner.md) |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**type** | [**MunicipalAuthorityPropertiesType**](MunicipalAuthorityPropertiesType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MunicipalAuthorityProperties } from 'golemio-api';

const instance: MunicipalAuthorityProperties = {
    image,
    email,
    telephone,
    web,
    address,
    agendas,
    district,
    id,
    name,
    official_board,
    opening_hours,
    updated_at,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

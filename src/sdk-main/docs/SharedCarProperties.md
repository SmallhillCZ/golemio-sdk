# SharedCarProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**res_url** | **string** |  | [default to undefined]
**company** | [**SharedCarCompany**](SharedCarCompany.md) |  | [optional] [default to undefined]
**availability** | [**SharedCarAvailability**](SharedCarAvailability.md) |  | [optional] [default to undefined]
**fuel** | [**SharedCarFuel**](SharedCarFuel.md) |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SharedCarProperties } from 'golemio-api';

const instance: SharedCarProperties = {
    id,
    name,
    res_url,
    company,
    availability,
    fuel,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

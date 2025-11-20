# V4PidTransferboardsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platform_code** | **string** |  | [default to undefined]
**stop_name** | **string** |  | [default to undefined]
**icons** | **Array&lt;string | null&gt;** |  | [optional] [default to undefined]
**departures** | [**Array&lt;V4PidTransferboardsGet200ResponseDeparturesInner&gt;**](V4PidTransferboardsGet200ResponseDeparturesInner.md) | List of departures from the stop. The list is sorted by: - route type - subway and then other   - subway is sorted alphabetically, then by departure time, then by direction id - departure time  | [default to undefined]
**infotexts** | [**Array&lt;V4PidTransferboardsGet200ResponseInfotextsInner&gt;**](V4PidTransferboardsGet200ResponseInfotextsInner.md) |  | [default to undefined]

## Example

```typescript
import { V4PidTransferboardsGet200Response } from 'golemio-public-transport-api';

const instance: V4PidTransferboardsGet200Response = {
    platform_code,
    stop_name,
    icons,
    departures,
    infotexts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

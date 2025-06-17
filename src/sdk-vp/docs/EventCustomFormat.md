# EventCustomFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**header_text** | [**EventCustomFormatHeaderText**](EventCustomFormatHeaderText.md) |  | [default to undefined]
**cause** | [**EventCustomFormatCause**](EventCustomFormatCause.md) |  | [default to undefined]
**cause_detail** | [**EventCustomFormatCauseDetail**](EventCustomFormatCauseDetail.md) |  | [default to undefined]
**severity_level** | **string** | INFO - priority 3 \\ WARNING - priority 2 \\ SEVERE - priority 1  | [default to undefined]
**active_period** | [**EventCustomFormatActivePeriod**](EventCustomFormatActivePeriod.md) |  | [default to undefined]
**display_period** | [**EventCustomFormatDisplayPeriod**](EventCustomFormatDisplayPeriod.md) |  | [default to undefined]
**effects** | [**Array&lt;Effect&gt;**](Effect.md) |  | [default to undefined]
**description_text** | [**EventCustomFormatDescriptionText**](EventCustomFormatDescriptionText.md) |  | [default to undefined]
**description_html** | [**EventCustomFormatDescriptionHtml**](EventCustomFormatDescriptionHtml.md) |  | [default to undefined]
**organization_name** | **string** |  | [default to undefined]
**informed_entity** | [**EventCustomFormatInformedEntity**](EventCustomFormatInformedEntity.md) |  | [default to undefined]
**last_modified_timestamp** | **string** | Timestamp from when the event was last modified in VYMI | [default to undefined]
**created_timestamp** | **string** | Timestamp from when the event was created in VYMI | [default to undefined]

## Example

```typescript
import { EventCustomFormat } from 'golemio-public-transport-api';

const instance: EventCustomFormat = {
    id,
    type,
    header_text,
    cause,
    cause_detail,
    severity_level,
    active_period,
    display_period,
    effects,
    description_text,
    description_html,
    organization_name,
    informed_entity,
    last_modified_timestamp,
    created_timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

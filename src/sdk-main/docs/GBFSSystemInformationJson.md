# GBFSSystemInformationJson

Details including system operator, system location, year implemented, URL, contact info, time zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**system_id** | **string** | Identifier for this vehicle share system. This should be globally unique (even between different systems). | [default to undefined]
**language** | **string** | The language that will be used throughout the rest of the files. It must match the value in the gbfs.json file. | [default to undefined]
**logo** | **string** | Logo of the system. | [default to undefined]
**name** | **string** | Name of the system to be displayed to customers. | [default to undefined]
**short_name** | **string** | Optional abbreviation for a system. | [optional] [default to undefined]
**operator** | **string** | Name of the operator | [optional] [default to undefined]
**url** | **string** | The URL of the vehicle share system. | [optional] [default to undefined]
**purchase_url** | **string** | URL where a customer can purchase a membership. | [optional] [default to undefined]
**start_date** | **string** | Date that the system began operations. | [optional] [default to undefined]
**phone_number** | **string** | A single voice telephone number for the specified system that presents the telephone number as typical for the system\&#39;s service area. | [optional] [default to undefined]
**email** | **string** | Email address actively monitored by the operator\&#39;s customer service department. | [optional] [default to undefined]
**feed_contact_email** | **string** | A single contact email address for consumers of this feed to report technical issues (added in v1.1). | [optional] [default to undefined]
**timezone** | **string** | The time zone where the system is located. | [default to undefined]
**license_id** | **string** | REQUIRED if the dataset is provided under a standard license. An identifier for a standard license from the SPDX License List. Provide license_id rather than license_url if the license is included in the SPDX License List. See the GBFS wiki for a comparison of a subset of standard licenses. If the license_id and license_url fields are blank or omitted, this indicates that the feed is provided under the Creative Commons Universal Public Domain Dedication. | [optional] [default to undefined]
**license_url** | **string** | A fully qualified URL of a page that defines the license terms for the GBFS data for this system. | [optional] [default to undefined]
**attribution_organization_name** | **string** | If the feed license requires attribution, name of the organization to which attribution should be provided. | [optional] [default to undefined]
**attribution_url** | **string** | URL of the organization to which attribution should be provided. | [optional] [default to undefined]
**terms_of_use_url** | **string** |  | [optional] [default to undefined]
**rental_apps** | [**GBFSSystemInformationJsonRentalApps**](GBFSSystemInformationJsonRentalApps.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GBFSSystemInformationJson } from 'golemio-api';

const instance: GBFSSystemInformationJson = {
    system_id,
    language,
    logo,
    name,
    short_name,
    operator,
    url,
    purchase_url,
    start_date,
    phone_number,
    email,
    feed_contact_email,
    timezone,
    license_id,
    license_url,
    attribution_organization_name,
    attribution_url,
    terms_of_use_url,
    rental_apps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

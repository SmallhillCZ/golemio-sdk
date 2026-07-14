# SignpostBase

Writable fields for a Signpost element. Composes ElementBase via allOf and adds 16 type-specific properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **string** | Unique document identifier sourced from the upstream CMS (Strapi). Used as the stable external reference for deduplication. | [default to undefined]
**uid** | **string** | Optional external UUID assigned to the physical element by the field operations team. May be null for elements not yet assigned. | [optional] [default to undefined]
**kind** | **string** | Discriminator field identifying the element type. Determines which typed schema applies (Totem, InformationPanel, DisplayCase, Obelisk, Signpost). | [default to undefined]
**name** | **string** | Human-readable name of the element. May be null. | [optional] [default to undefined]
**state** | [**ElementStateEnum**](ElementStateEnum.md) | Lifecycle state of the element. May not be null. | [optional] [default to undefined]
**owner** | [**OwnerEnum**](OwnerEnum.md) | Organization or entity that owns the element. May be null. | [optional] [default to undefined]
**manager** | [**ManagerEnum**](ManagerEnum.md) | Organization or entity that manages the element. May be null. | [optional] [default to undefined]
**city_district** | [**CityDistrictEnum**](CityDistrictEnum.md) | Prague city district where the element is physically located. May be null. | [optional] [default to undefined]
**lat** | **number** | WGS-84 latitude coordinate of the element\&#39;s installation site. May be null if coordinates are not yet surveyed. | [optional] [default to undefined]
**lon** | **number** | WGS-84 longitude coordinate of the element\&#39;s installation site. May be null if coordinates are not yet surveyed. | [optional] [default to undefined]
**map_link** | **string** | URL to an external map view showing the element location. Deprecated: the source field was removed in Strapi; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**planned_year_of_realization** | **string** | Year in which the element is planned to be realized or installed. May be null. | [optional] [default to undefined]
**note** | **string** | Free-text operational note attached to the element by field staff. May be null. | [optional] [default to undefined]
**handover** | **boolean** | Indicates whether the element has been handed over to the maintenance team. May be null if handover status is unknown. | [optional] [default to undefined]
**handover_date** | **string** | Date on which the element was formally handed over to the maintenance team. ISO 8601 date. May be null. | [optional] [default to undefined]
**street_name** | **string** | Name of the street where the signpost is located. May be null if not yet recorded. | [optional] [default to undefined]
**location_description** | **string** | Free-text description of the precise installation location. May be null. | [optional] [default to undefined]
**land_parcel_number** | **string** | Cadastral land parcel number of the plot on which the signpost is installed. May be null. | [optional] [default to undefined]
**land_owner** | [**LandOwnerEnum**](LandOwnerEnum.md) | Owner of the land parcel where the signpost is installed. May be null. | [optional] [default to undefined]
**street_light_number** | **string** | Identifier of the street-light pole the signpost is attached to. May be null if not attached to a street-light pole. | [optional] [default to undefined]
**sheet_count** | **number** | Number of direction sheets (panels) mounted on the signpost. Whole number. May be null if not yet counted. | [optional] [default to undefined]
**priority** | **string** | Maintenance priority assigned to this signpost (\&quot;p1\&quot; to \&quot;p5\&quot;). May be null. | [optional] [default to undefined]
**asset_registered** | **boolean** | Indicates whether the signpost is registered in the asset management system. May be null if registration status is unknown. | [optional] [default to undefined]
**asset_number** | **string** | Asset management system identifier for the signpost. May be null if the signpost is not yet registered. | [optional] [default to undefined]
**insurance** | **boolean** | Indicates whether the signpost is covered by an insurance policy. May be null if insurance status is unknown. | [optional] [default to undefined]
**insurance_state** | [**InsuranceStateEnum**](InsuranceStateEnum.md) | Current state of the insurance coverage for the signpost. May be null. | [optional] [default to undefined]
**handed_over_to_ozp** | **boolean** | Whether this signpost has been formally handed over to OZP (Odbor životního prostředí) for management. May be null. | [optional] [default to undefined]
**comments** | **string** | Free-text comments or operational notes recorded by field staff. May be null. | [optional] [default to undefined]
**ropid_element_id** | **string** | Identifier assigned to this signpost within the ROPID system. Deprecated: the source field was removed in Strapi; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**construction_type** | **string** | Construction type of the signpost (\&quot;Samostatně stojící\&quot;, \&quot;Na konstrukci - VO\&quot;, \&quot;Totem\&quot;). May be null. | [optional] [default to undefined]
**price_without_vat** | **number** | Procurement or installation price of the signpost, excluding VAT. Currency is CZK. May be null if pricing data is unavailable. | [optional] [default to undefined]

## Example

```typescript
import { SignpostBase } from 'golemio-public-transport-api';

const instance: SignpostBase = {
    document_id,
    uid,
    kind,
    name,
    state,
    owner,
    manager,
    city_district,
    lat,
    lon,
    map_link,
    planned_year_of_realization,
    note,
    handover,
    handover_date,
    street_name,
    location_description,
    land_parcel_number,
    land_owner,
    street_light_number,
    sheet_count,
    priority,
    asset_registered,
    asset_number,
    insurance,
    insurance_state,
    handed_over_to_ozp,
    comments,
    ropid_element_id,
    construction_type,
    price_without_vat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

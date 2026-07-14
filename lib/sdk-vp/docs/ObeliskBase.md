# ObeliskBase

Writable obelisk-specific fields extending ElementBase. Contains the 14 type-specific properties for the obelisk element type. Compose via allOf with ElementBase to obtain the full writable surface.

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
**street_name** | **string** | Name of the street where the obelisk is physically located. May be null if the street name is not recorded. | [optional] [default to undefined]
**location_description** | **string** | Free-text description of the obelisk\&#39;s exact placement within its location. May be null. | [optional] [default to undefined]
**land_parcel_number** | **string** | Cadastral land parcel number identifying the plot on which the obelisk stands. May be null. | [optional] [default to undefined]
**land_owner** | [**LandOwnerEnum**](LandOwnerEnum.md) | Owner of the land parcel where the obelisk is installed. May be null. | [optional] [default to undefined]
**priority** | **string** | Maintenance priority assigned to this obelisk (\&quot;p1\&quot; to \&quot;p5\&quot;). May be null. | [optional] [default to undefined]
**asset_registered** | **boolean** | Indicates whether the obelisk is formally registered in the asset management system. May be null if the status is unknown. | [optional] [default to undefined]
**asset_number** | **string** | Asset inventory number assigned when the obelisk is registered in the asset management system. May be null. | [optional] [default to undefined]
**insurance** | **boolean** | Indicates whether the obelisk is covered by an insurance policy. May be null if insurance status is not recorded. | [optional] [default to undefined]
**insurance_state** | [**InsuranceStateEnum**](InsuranceStateEnum.md) | Current state of the insurance policy for the obelisk. May be null. | [optional] [default to undefined]
**handed_over_to_ozp** | **boolean** | Whether this obelisk has been formally handed over to OZP (Odbor životního prostředí) for management. May be null. | [optional] [default to undefined]
**comments** | **string** | Free-text comments or operational notes associated with the obelisk. May be null. | [optional] [default to undefined]
**ropid_element_id** | **string** | Identifier assigned to this element within the ROPID external registry. Deprecated: the source field was removed in Strapi; always null for newly synced data, retained for backward compatibility. | [optional] [default to undefined]
**construction_type** | **string** | Construction type of the obelisk (\&quot;Široký\&quot;, \&quot;Standard\&quot;, \&quot;Úzký\&quot;). May be null. | [optional] [default to undefined]
**price_without_vat** | **number** | Procurement or installation cost of the obelisk excluding VAT, expressed in the local currency (CZK). May be null if the cost is not recorded. | [optional] [default to undefined]

## Example

```typescript
import { ObeliskBase } from 'golemio-public-transport-api';

const instance: ObeliskBase = {
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

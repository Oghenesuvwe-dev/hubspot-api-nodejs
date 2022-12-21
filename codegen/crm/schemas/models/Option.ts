/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object's type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* The options available when a property is an enumeration
*/
export class Option {
    /**
    * A human-readable option label that will be shown in HubSpot.
    */
    'label': string;
    /**
    * The internal value of the option, which must be used when setting the property value through the API.
    */
    'value': string;
    /**
    * A description of the option.
    */
    'description'?: string;
    /**
    * Options are displayed in order starting with the lowest positive integer value. Values of -1 will cause the option to be displayed after any positive values.
    */
    'displayOrder'?: number;
    /**
    * Hidden options will not be displayed in HubSpot.
    */
    'hidden': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Option.attributeTypeMap;
    }

    public constructor() {
    }
}


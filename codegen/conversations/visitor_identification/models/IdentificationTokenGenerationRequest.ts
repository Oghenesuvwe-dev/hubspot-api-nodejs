/**
 * Visitor Identification
 * The Visitor Identification API allows you to pass identification information to the HubSpot chat widget for otherwise unknown visitors that were verified by your own authentication system.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Information used to generate a token
*/
export class IdentificationTokenGenerationRequest {
    /**
    * The email of the visitor that you wish to identify
    */
    'email': string;
    /**
    * The first name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where first name is unknown. Optional.
    */
    'firstName'?: string;
    /**
    * The last name of the visitor that you wish to identify. This value will only be set in HubSpot for new contacts and existing contacts where last name is unknown. Optional.
    */
    'lastName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IdentificationTokenGenerationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


/**
 * Subscriptions
 * Subscriptions allow contacts to control what forms of communications they receive. Contacts can decide whether they want to receive communication pertaining to a specific topic, brand, or an entire HubSpot account.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ErrorDetail {
    /**
    * A human readable message describing the error along with remediation steps where appropriate
    */
    'message': string;
    /**
    * The name of the field or parameter in which the error was found.
    */
    '_in'?: string;
    /**
    * The status code associated with the error detail
    */
    'code'?: string;
    /**
    * A specific category that contains more specific detail about the error
    */
    'subCategory'?: string;
    /**
    * Context about the error condition
    */
    'context'?: { [key: string]: Array<string>; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "_in",
            "baseName": "in",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "subCategory",
            "baseName": "subCategory",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ErrorDetail.attributeTypeMap;
    }

    public constructor() {
    }
}


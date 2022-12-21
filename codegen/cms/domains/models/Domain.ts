/**
 * Domains
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class Domain {
    /**
    * The unique ID of this domain.
    */
    'id': string;
    /**
    * The actual domain or sub-domain. e.g. www.hubspot.com
    */
    'domain': string;
    'primaryLandingPage'?: boolean;
    'primaryEmail'?: boolean;
    'primaryBlogPost'?: boolean;
    'primarySitePage'?: boolean;
    'primaryKnowledge'?: boolean;
    'secondaryToDomain'?: string;
    /**
    * Whether the DNS for this domain is optimally configured for use with HubSpot.
    */
    'isResolving': boolean;
    'manuallyMarkedAsResolving'?: boolean;
    'isSslEnabled'?: boolean;
    'isSslOnly'?: boolean;
    /**
    * Whether the domain is used for CMS blog posts.
    */
    'isUsedForBlogPost': boolean;
    /**
    * Whether the domain is used for CMS site pages.
    */
    'isUsedForSitePage': boolean;
    /**
    * Whether the domain is used for CMS landing pages.
    */
    'isUsedForLandingPage': boolean;
    /**
    * Whether the domain is used for CMS email web pages.
    */
    'isUsedForEmail': boolean;
    /**
    * Whether the domain is used for CMS knowledge pages.
    */
    'isUsedForKnowledge': boolean;
    'correctCname'?: string;
    'created'?: Date;
    'updated'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryLandingPage",
            "baseName": "primaryLandingPage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primaryEmail",
            "baseName": "primaryEmail",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primaryBlogPost",
            "baseName": "primaryBlogPost",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primarySitePage",
            "baseName": "primarySitePage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primaryKnowledge",
            "baseName": "primaryKnowledge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secondaryToDomain",
            "baseName": "secondaryToDomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "isResolving",
            "baseName": "isResolving",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "manuallyMarkedAsResolving",
            "baseName": "manuallyMarkedAsResolving",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSslEnabled",
            "baseName": "isSslEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSslOnly",
            "baseName": "isSslOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isUsedForBlogPost",
            "baseName": "isUsedForBlogPost",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isUsedForSitePage",
            "baseName": "isUsedForSitePage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isUsedForLandingPage",
            "baseName": "isUsedForLandingPage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isUsedForEmail",
            "baseName": "isUsedForEmail",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isUsedForKnowledge",
            "baseName": "isUsedForKnowledge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "correctCname",
            "baseName": "correctCname",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Domain.attributeTypeMap;
    }

    public constructor() {
    }
}


import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SlsPrcgCndnSupplementText } from './SlsPrcgCndnSupplementText';
/**
 * Request builder class for operations supported on the [[SlsPrcgCndnSupplementText]] entity.
 */
export declare class SlsPrcgCndnSupplementTextRequestBuilder extends RequestBuilder<SlsPrcgCndnSupplementText> {
    /**
     * Returns a request builder for retrieving one `SlsPrcgCndnSupplementText` entity based on its keys.
     * @param conditionRecord Key property. See [[SlsPrcgCndnSupplementText.conditionRecord]].
     * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnSupplementText.conditionSequentialNumber]].
     * @param language Key property. See [[SlsPrcgCndnSupplementText.language]].
     * @returns A request builder for creating requests to retrieve one `SlsPrcgCndnSupplementText` entity based on its keys.
     */
    getByKey(conditionRecord: string, conditionSequentialNumber: string, language: string): GetByKeyRequestBuilderV2<SlsPrcgCndnSupplementText>;
    /**
     * Returns a request builder for querying all `SlsPrcgCndnSupplementText` entities.
     * @returns A request builder for creating requests to retrieve all `SlsPrcgCndnSupplementText` entities.
     */
    getAll(): GetAllRequestBuilderV2<SlsPrcgCndnSupplementText>;
    /**
     * Returns a request builder for creating a `SlsPrcgCndnSupplementText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsPrcgCndnSupplementText`.
     */
    create(entity: SlsPrcgCndnSupplementText): CreateRequestBuilderV2<SlsPrcgCndnSupplementText>;
    /**
     * Returns a request builder for updating an entity of type `SlsPrcgCndnSupplementText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsPrcgCndnSupplementText`.
     */
    update(entity: SlsPrcgCndnSupplementText): UpdateRequestBuilderV2<SlsPrcgCndnSupplementText>;
    /**
     * Returns a request builder for deleting an entity of type `SlsPrcgCndnSupplementText`.
     * @param conditionRecord Key property. See [[SlsPrcgCndnSupplementText.conditionRecord]].
     * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnSupplementText.conditionSequentialNumber]].
     * @param language Key property. See [[SlsPrcgCndnSupplementText.language]].
     * @returns A request builder for creating requests that delete an entity of type `SlsPrcgCndnSupplementText`.
     */
    delete(conditionRecord: string, conditionSequentialNumber: string, language: string): DeleteRequestBuilderV2<SlsPrcgCndnSupplementText>;
    /**
     * Returns a request builder for deleting an entity of type `SlsPrcgCndnSupplementText`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SlsPrcgCndnSupplementText` by taking the entity as a parameter.
     */
    delete(entity: SlsPrcgCndnSupplementText): DeleteRequestBuilderV2<SlsPrcgCndnSupplementText>;
}
//# sourceMappingURL=SlsPrcgCndnSupplementTextRequestBuilder.d.ts.map
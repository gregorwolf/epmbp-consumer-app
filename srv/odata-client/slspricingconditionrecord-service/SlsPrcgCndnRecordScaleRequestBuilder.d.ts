import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SlsPrcgCndnRecordScale } from './SlsPrcgCndnRecordScale';
/**
 * Request builder class for operations supported on the [[SlsPrcgCndnRecordScale]] entity.
 */
export declare class SlsPrcgCndnRecordScaleRequestBuilder extends RequestBuilder<SlsPrcgCndnRecordScale> {
    /**
     * Returns a request builder for retrieving one `SlsPrcgCndnRecordScale` entity based on its keys.
     * @param conditionRecord Key property. See [[SlsPrcgCndnRecordScale.conditionRecord]].
     * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnRecordScale.conditionSequentialNumber]].
     * @param conditionScaleLine Key property. See [[SlsPrcgCndnRecordScale.conditionScaleLine]].
     * @returns A request builder for creating requests to retrieve one `SlsPrcgCndnRecordScale` entity based on its keys.
     */
    getByKey(conditionRecord: string, conditionSequentialNumber: string, conditionScaleLine: string): GetByKeyRequestBuilderV2<SlsPrcgCndnRecordScale>;
    /**
     * Returns a request builder for querying all `SlsPrcgCndnRecordScale` entities.
     * @returns A request builder for creating requests to retrieve all `SlsPrcgCndnRecordScale` entities.
     */
    getAll(): GetAllRequestBuilderV2<SlsPrcgCndnRecordScale>;
    /**
     * Returns a request builder for creating a `SlsPrcgCndnRecordScale` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsPrcgCndnRecordScale`.
     */
    create(entity: SlsPrcgCndnRecordScale): CreateRequestBuilderV2<SlsPrcgCndnRecordScale>;
    /**
     * Returns a request builder for updating an entity of type `SlsPrcgCndnRecordScale`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsPrcgCndnRecordScale`.
     */
    update(entity: SlsPrcgCndnRecordScale): UpdateRequestBuilderV2<SlsPrcgCndnRecordScale>;
    /**
     * Returns a request builder for deleting an entity of type `SlsPrcgCndnRecordScale`.
     * @param conditionRecord Key property. See [[SlsPrcgCndnRecordScale.conditionRecord]].
     * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnRecordScale.conditionSequentialNumber]].
     * @param conditionScaleLine Key property. See [[SlsPrcgCndnRecordScale.conditionScaleLine]].
     * @returns A request builder for creating requests that delete an entity of type `SlsPrcgCndnRecordScale`.
     */
    delete(conditionRecord: string, conditionSequentialNumber: string, conditionScaleLine: string): DeleteRequestBuilderV2<SlsPrcgCndnRecordScale>;
    /**
     * Returns a request builder for deleting an entity of type `SlsPrcgCndnRecordScale`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SlsPrcgCndnRecordScale` by taking the entity as a parameter.
     */
    delete(entity: SlsPrcgCndnRecordScale): DeleteRequestBuilderV2<SlsPrcgCndnRecordScale>;
}
//# sourceMappingURL=SlsPrcgCndnRecordScaleRequestBuilder.d.ts.map
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WeightUnits } from './WeightUnits';
/**
 * Request builder class for operations supported on the [[WeightUnits]] entity.
 */
export declare class WeightUnitsRequestBuilder extends RequestBuilder<WeightUnits> {
    /**
     * Returns a request builder for retrieving one `WeightUnits` entity based on its keys.
     * @param unit Key property. See [[WeightUnits.unit]].
     * @returns A request builder for creating requests to retrieve one `WeightUnits` entity based on its keys.
     */
    getByKey(unit: string): GetByKeyRequestBuilder<WeightUnits>;
    /**
     * Returns a request builder for querying all `WeightUnits` entities.
     * @returns A request builder for creating requests to retrieve all `WeightUnits` entities.
     */
    getAll(): GetAllRequestBuilder<WeightUnits>;
}
//# sourceMappingURL=WeightUnitsRequestBuilder.d.ts.map
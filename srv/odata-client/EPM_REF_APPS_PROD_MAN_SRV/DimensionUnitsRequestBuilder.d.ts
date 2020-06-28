import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DimensionUnits } from './DimensionUnits';
/**
 * Request builder class for operations supported on the [[DimensionUnits]] entity.
 */
export declare class DimensionUnitsRequestBuilder extends RequestBuilder<DimensionUnits> {
    /**
     * Returns a request builder for retrieving one `DimensionUnits` entity based on its keys.
     * @param unit Key property. See [[DimensionUnits.unit]].
     * @returns A request builder for creating requests to retrieve one `DimensionUnits` entity based on its keys.
     */
    getByKey(unit: string): GetByKeyRequestBuilder<DimensionUnits>;
    /**
     * Returns a request builder for querying all `DimensionUnits` entities.
     * @returns A request builder for creating requests to retrieve all `DimensionUnits` entities.
     */
    getAll(): GetAllRequestBuilder<DimensionUnits>;
}
//# sourceMappingURL=DimensionUnitsRequestBuilder.d.ts.map
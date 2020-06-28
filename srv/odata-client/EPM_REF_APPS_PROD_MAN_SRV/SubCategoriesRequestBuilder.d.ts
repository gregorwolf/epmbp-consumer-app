import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { SubCategories } from './SubCategories';
/**
 * Request builder class for operations supported on the [[SubCategories]] entity.
 */
export declare class SubCategoriesRequestBuilder extends RequestBuilder<SubCategories> {
    /**
     * Returns a request builder for retrieving one `SubCategories` entity based on its keys.
     * @param id Key property. See [[SubCategories.id]].
     * @returns A request builder for creating requests to retrieve one `SubCategories` entity based on its keys.
     */
    getByKey(id: string): GetByKeyRequestBuilder<SubCategories>;
    /**
     * Returns a request builder for querying all `SubCategories` entities.
     * @returns A request builder for creating requests to retrieve all `SubCategories` entities.
     */
    getAll(): GetAllRequestBuilder<SubCategories>;
}
//# sourceMappingURL=SubCategoriesRequestBuilder.d.ts.map
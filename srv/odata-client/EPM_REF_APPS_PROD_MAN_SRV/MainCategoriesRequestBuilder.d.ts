import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { MainCategories } from './MainCategories';
/**
 * Request builder class for operations supported on the [[MainCategories]] entity.
 */
export declare class MainCategoriesRequestBuilder extends RequestBuilder<MainCategories> {
    /**
     * Returns a request builder for retrieving one `MainCategories` entity based on its keys.
     * @param id Key property. See [[MainCategories.id]].
     * @returns A request builder for creating requests to retrieve one `MainCategories` entity based on its keys.
     */
    getByKey(id: string): GetByKeyRequestBuilder<MainCategories>;
    /**
     * Returns a request builder for querying all `MainCategories` entities.
     * @returns A request builder for creating requests to retrieve all `MainCategories` entities.
     */
    getAll(): GetAllRequestBuilder<MainCategories>;
}
//# sourceMappingURL=MainCategoriesRequestBuilder.d.ts.map
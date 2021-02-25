import { createSelector } from 'reselect';
// import memoize from 'lodash.memoize';

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

// map over collections by selecting it, and passing into selectCollection the collectionUrlParam which is a string and in turn returns createSelector
export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
    )
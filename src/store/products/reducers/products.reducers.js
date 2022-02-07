export function loadProductsSuccess(state, {payload}) {
    state.products = payload
    state.status = 'success'
}

export function loadProductsFailed(state, {payload}) {
    state.error = payload.message
    state.status = 'error'
}

export function loadProductsCategorySuccess(state, {payload}) {
    state.productsCategory.categories = payload
    state.productsCategory.status = 'success'
}

export function loadProductsCategoryFailed(state, {payload}) {
    state.productsCategory.error = payload.message
    state.productsCategory.status = 'error'
}

export function setProductsFilters(state, {payload}) {
    state.filters = {...payload}
}

export function setCurrentPage(state, {payload}) {
    state.pagination.currantPage = payload
}

export function setTotalPages(state, {payload}) {
    state.pagination.totalPages = payload
}
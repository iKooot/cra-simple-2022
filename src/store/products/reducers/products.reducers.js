export function loadProductsSuccess(state, {payload}) {
    state.products = payload
    state.status = 'success'
}

export function loadProductsFailed(state, {payload}) {
    state.error = payload.message
    state.status = 'error'
}

export function setCurrentPage(state, {payload}) {
    state.pagination.currantPage = payload
}

export function setTotalPages(state, {payload}) {
    state.pagination.totalPages = payload
}
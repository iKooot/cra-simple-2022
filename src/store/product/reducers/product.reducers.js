export function loadProductSuccess(state, {payload}) {
    state.product = payload
    state.status = 'success'
}

export function loadProductFailed(state, {payload}) {
    state.error = payload.message
    state.status = 'error'
}
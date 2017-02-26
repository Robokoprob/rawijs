import { OPEN_DRAWER } from './actionTypes';

export function openDrawer(open) {
    return {
        type: OPEN_DRAWER,
        open: open
    }
}

// store.dispatch(openDrawer(true));
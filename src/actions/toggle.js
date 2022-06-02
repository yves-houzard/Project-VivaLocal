import { toggleT } from '../action-types';

export const actionsToggleInfos = (value) => ({
  type: toggleT.INFOS_TOGGLE,
  payload: {
    settingsInfos: !value,
  },
});

export const actionsToggleCom = (value) => ({
  type: toggleT.COM_TOGGLE,
  payload: {
    settingsCom: !value,
  },
});

export const actionsToggleBurger = (value) => ({
  type: toggleT.MENU__TOGGLE,
  payload: {
    activeMenu: !value,
  },
});

export const actionsToggleEditingInfos = (value) => ({
  type: toggleT.EDITING_INFOS_TOGGLE,
  payload: {
    editingInfos: !value,
  },
});

export const actionsToggleEditingCom = (value) => ({
  type: toggleT.EDITING_COM_TOGGLE,
  payload: {
    editingCom: !value,
  },
});

/* payload is product id */
export const actionProductEditionToggleOn = (payload) => ({
  type: toggleT.PRODUCT_EDITION_ON,
  payload,
});

/* payload is product id */
export const actionProductEditionToggleOff = (payload) => ({
  type: toggleT.PRODUCT_EDITION_OFF,
  payload,
});

/* Generic toggle action */
export const actionToggleOn = (toggleKey) => ({
  type: toggleT.ON,
  payload: toggleKey,
});

/* Generic toggle action */
export const actionToggleOff = (toggleKey) => ({
  type: toggleT.OFF,
  payload: toggleKey,
});

// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  components: '/components',
  // AUTH
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    one: `${ROOTS.DASHBOARD}/`,
    aiInteractio: `${ROOTS.DASHBOARD}/ai-interaction`,
    // dataBaseManagement: `${ROOTS.DASHBOARD}/database-management`,
    fileManagement: `${ROOTS.DASHBOARD}/data-center`,
    feedback: `${ROOTS.DASHBOARD}/feedback`,
    help: `${ROOTS.DASHBOARD}/help`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
  },
};

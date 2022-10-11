import configs from '~/configs';

import Home from '~/pages/Home';
import Promotion from '~/pages/Promotion';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.promotion, component: Promotion },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

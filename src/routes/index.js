import { HeaderOnlyLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

import routesConfig from '~/config/routes';
// Public routes allow everyone to access.
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnlyLayout },
    { path: routesConfig.search, component: Search, layout: null },
];

// Private routes requires authentication.
const privateRoutes = [];

export { publicRoutes, privateRoutes };

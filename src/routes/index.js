import { HeaderOnlyLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// Public routes allow everyone to access.
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
    { path: '/search', component: Search, layout: null },
];

// Private routes requires authentication.
const privateRoutes = [];

export { publicRoutes, privateRoutes };
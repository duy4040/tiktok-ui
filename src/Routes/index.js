import { HeaderOnly } from '~/Component/Layout';
import { Home, Following, Profile, Search, Upload } from '~/pages';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [];

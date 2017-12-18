import index from '../pages/index.vue';
import login from '../pages/login/login.vue';
import register from '../pages/register/register.vue';

import entry from '../pages/main/entry/entry.vue';
import name from '../pages/main/entry/entryActivity/name/name.vue';
import manage from '../pages/main/entry/entryActivity/manage/manage.vue';
import gridding from '../pages/main/gridding/gridding.vue';
import publics from '../pages/main/publics/public.vue';

import active from '../pages/main/publics/activity/active/active.vue';
import info from '../pages/main/publics/activity/info/info.vue';

import activity from '../pages/main/publics/activity/activity.vue';
import entryActivity from '../pages/main/entry/entryActivity/entryActivity.vue';
let routes = [
    {
        path: '/',
        redirect: '/index/publics/activity/1/active'
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [
            {
                path: 'entry',
                name: 'entry',
                component: entry,
                children: [
                    {
                        path: 'entryActivity/:id',
                        name: 'entryActivity',
                        component: entryActivity,
                        children: [
                            {
                                path: 'name',
                                name: 'name',
                                component: name
                            },
                            {
                                path: 'manage',
                                name: 'manage',
                                component: manage
                            }
                        ]
                    }
                ]
            },
            {
                path: 'gridding',
                name: 'gridding',
                component: gridding
            },
            {
                path: 'publics',
                name: 'publics',
                component: publics,
                children: [
                    {
                        path: 'activity/:id',
                        name: 'activity',
                        component: activity,
                        children: [
                            {
                                path: 'active',
                                name: 'active',
                                component: active
                            },
                            {
                                path: 'info',
                                name: 'info',
                                component: info
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
export default routes;
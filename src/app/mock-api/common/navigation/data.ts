/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'หน้าแรก',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/example'
    },
    {
        id: 'dashboard',
        title: 'แดชบอร์ด',
        type: 'basic',
        icon: 'heroicons_outline:chart-square-bar',
        link: '/dashboard'
        
    },
    {
        id   : 'income',
        title: 'สถิติรายได้',
        type : 'basic',
        icon : 'heroicons_outline:currency-dollar',
        link : '/income'
    },
    {
        id   : 'CPA',
        title: 'สถิติ CPA',
        type : 'basic',
        icon : 'heroicons_outline:chart-bar',
        link : '/cpa'
    },
    {
        id   : 'pay',
        title: 'การชำระเงิน',
        type : 'basic',
        icon : 'heroicons_outline:credit-card',
        link : '/pay'
    },
    
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];

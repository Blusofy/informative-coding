import { Tab, Tabs } from '@material-ui/core';
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    Help as HelpIcon,
    Home as HomeIcon,
    QueryBuilder as QueryBuilderIcon,
    ShowChart as ShowChartIcon,
} from '@material-ui/icons';

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const listMenu = [
    {
        name: 'Home',
        href: '/',
        icon: <HomeIcon />,
    },
    {
        name: 'Programming',
        href: '/programming',
        icon: <CodeIcon />,
    },
    {
        name: 'Data Structures',
        href: '/data-structures',
        icon: <DataUsageIcon />,
    },
    {
        name: 'Algorithms',
        href: '/algorithms',
        icon: <ShowChartIcon />,
    },
    {
        name: 'Technologies',
        href: '/technologies',
        icon: <HelpIcon />,
    },
    {
        name: 'Blogs',
        href: '/blogs',
        icon: <QueryBuilderIcon />,
    },
];

function NavTab() {
    return (
        <Tabs
            value={process.env.ROOT_PAGE || false}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
        >
            {listMenu.map(({ name, href, icon }, index) => (
                <Tab
                    label={name}
                    href={href}
                    value={href}
                    icon={icon}
                    key={name}
                    {...a11yProps(index)}
                />
            ))}
        </Tabs>
    );
}
export default NavTab;

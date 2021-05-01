import { Tab, Tabs, Typography } from '@material-ui/core';
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
        name: 'হোম',
        href: '/',
        icon: <HomeIcon />,
    },
    {
        name: 'প্রোগ্রামিং',
        href: '/programming',
        icon: <CodeIcon />,
    },
    {
        name: 'ডাটা স্ট্রাটার্স',
        href: '/data-structures',
        icon: <DataUsageIcon />,
    },
    {
        name: 'অ্যালগরিদমস',
        href: '/algorithms',
        icon: <ShowChartIcon />,
    },
    {
        name: 'টেকনোলজিস',
        href: '/technologies',
        icon: <HelpIcon />,
    },
    {
        name: 'ব্লগস',
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
                    label={
                        <Typography variant="h6" color="textSecondary">
                            {name}
                        </Typography>
                    }
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

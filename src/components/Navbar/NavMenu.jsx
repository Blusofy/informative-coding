import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    Help as HelpIcon,
    Home as HomeIcon,
    QueryBuilder as QueryBuilderIcon,
    ShowChart as ShowChartIcon,
} from '@material-ui/icons';
import { useRouter } from 'next/router';

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
        name: 'ডাটা স্ট্রাকচার',
        href: '/data-structure',
        icon: <DataUsageIcon />,
    },
    {
        name: 'অ্যালগরিদম',
        href: '/algorithm',
        icon: <ShowChartIcon />,
    },
    {
        name: 'জনপ্রিয় প্রযুক্তি',
        href: '/technologies',
        icon: <HelpIcon />,
    },
    {
        name: 'ব্লগ',
        href: '/blog',
        icon: <QueryBuilderIcon />,
    },
];
function Item({ name, icon, href }) {
    const router = useRouter();
    return (
        <ListItem button divider onClick={() => router.push(href)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>
                <Typography variant="h6" color="textSecondary">
                    {name}
                </Typography>
            </ListItemText>
        </ListItem>
    );
}
export default function NavMenu({ open, handleClose }) {
    return (
        <div>
            <Drawer open={open} onClose={handleClose}>
                <List>
                    {listMenu.map(({ ...list }) => (
                        <Item {...list} key={list.name} />
                    ))}
                </List>
            </Drawer>
        </div>
    );
}

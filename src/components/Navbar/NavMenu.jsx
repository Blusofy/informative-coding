import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
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
function Item({ name, icon, href }) {
    const router = useRouter();
    return (
        <ListItem button divider onClick={() => router.push(href)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{name}</ListItemText>
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

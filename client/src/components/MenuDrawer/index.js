import { Drawer } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';
import BlenderIcon from '@mui/icons-material/Blender';
import Toolbar from "@mui/material/Toolbar";
import { forwardRef } from "react";


let drawerWidth = 200;
const menuItems = [{ 'Clothes': CheckroomIcon }, { 'Accessories': DiamondIcon }, { 'Household': BlenderIcon }]


const MenuDrawer = forwardRef((props, ref)=> {
// export default function MenuDrawer() {


    return (
    <Drawer ref={ref}
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                zIndex:'-1',
                // left:'200px',
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <Toolbar />
        <List>
        {menuItems.map((item, index) => {
                const text = Object.keys(item)[0];
                const Icon = Object.values(item)[0];
                return (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    </Drawer>
    )
})

export default MenuDrawer
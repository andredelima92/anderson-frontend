import { useState } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function LinkHeader() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link href="/">
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
        </Link>

        <Link href="/clients">
          <BottomNavigationAction label="Clientes" icon={<FavoriteIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}

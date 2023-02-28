import { useState } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";

type LinkHeaderProps = {
  updateUsers: () => Promise<void>;
};

export default function LinkHeader({ updateUsers }: LinkHeaderProps) {
  const [value, setValue] = useState(0);

  async function createClient() {
    //*
    /*
     *Criar cliente aqui
     * *
     **/

    await updateUsers();
  }

  return <Box sx={{ width: 500 }}></Box>;
}

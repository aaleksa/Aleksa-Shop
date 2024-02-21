'use client'
import Box from "@mui/material/Box";
import DrawerAppBar from "./AppBar";
import * as React from "react";
import Container from "@mui/material/Container";
import AnnounceBar from "./AnnonceBar";

export default function Header() {

    return (
        <div>
            <AnnounceBar/>
            <DrawerAppBar/>
        </div>

    );
}
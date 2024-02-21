'use client'

import * as React from 'react';
import {styled} from "@mui/material/styles"
import TitlePage from "../../components/TitlePage";
import { Component } from "react";
import Header from "../../components/Header";
import Box from "@mui/material/Box";

const FontColor = styled("div")(({theme}) => ({
        [theme.breakpoints.up('md')]: {
            color: theme.palette.text.secondary,
        },

}));

export default class About extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "About",
        };
    }
    render() {
    return (
        <Box component={"main"} >
            <Header/>
            <TitlePage title={this.state.title} />
        </Box>
    );
}}
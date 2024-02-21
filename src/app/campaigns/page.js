'use client'
import DrawerAppBar from "/src/components/AppBar";
import * as React from 'react';
import { Component } from "react";
import TitlePage from "../../components/TitlePage";
import Header from "../../components/Header";
import Box from "@mui/material/Box";

export default class Campaigns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Campaigns",
        };
    }
    render(){

    return (
        <Box component={"main"} >
            <Header/>
            <TitlePage title={this.state.title} />
        </Box>
    );
}}
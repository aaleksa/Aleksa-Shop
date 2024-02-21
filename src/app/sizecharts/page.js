'use client'
import * as React from 'react';
import TitlePage from "../../components/TitlePage";
import { Component } from "react";
import Header from "../../components/Header";
import Box from "@mui/material/Box";

export default class SizeCharts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "Size Charts",
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
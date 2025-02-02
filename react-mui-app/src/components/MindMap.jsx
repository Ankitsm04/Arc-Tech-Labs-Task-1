import React, { useState, useEffect } from "react";
import { fetchData } from "../api";
import Tree from "react-d3-tree";
import { Box } from "@mui/material";

const MindMap = () => {
    const [treeData , setTreeData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            if(data.length > 0){
                const formattedTree = formatDataForTree(data.slice(0,5));
                setTreeData(formattedTree);
            }
        };
        getData();
    }, []);

    const formatDataForTree = (data) => {
        return {
            name:"Posts",
            children: data.map((post) => ({
                name: `Post ${post.id}`,
                children: [{name: post.title} , {name:post.body.substring(0+50) + "..."}],
            })),
        };
    };

    return (
        <Box sx={{width: "505%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}>
            {treeData && (
                <div style={{width: "100%", height:"100vh"}}>
                <Tree data={treeData} translate={{x:100, y:300}}/>
                </div>)}
        </Box>
    );
};

export default MindMap;

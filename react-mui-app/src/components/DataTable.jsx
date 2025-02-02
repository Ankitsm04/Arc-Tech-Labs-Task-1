import React,{useEffect , useState } from "react";
import { fetchData } from "../api";
import {Table , TableBody , TableCell , TableContainer , TableHead , TableRow , Paper, Tab} from '@mui/material';

const DataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    return (
        <TableContainer component={Paper} sx={{
            width: {xs:"100%" , md: "50%"},
            mx: 2,
            my: 2,
        }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row)=> (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.body}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default DataTable;
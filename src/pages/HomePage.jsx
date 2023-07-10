import { Box, Button, TextField } from "@mui/material";
import { useGameState } from "../logic/provider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const [count, setCount] = useState(0)
    const [state, setState] = useGameState()
    const navigate = useNavigate()
    console.log({state});

    return <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center'>
        <TextField label='Players' size="small" value={count} onChange={e => setCount(Number(e.target.value))} />
        <Button onClick={() => {
            setState([...Array(count)].map((_,i) => ({name:`Player ${i}`})))
            navigate('/game')
            }}>Start</Button>
    </Box>
}
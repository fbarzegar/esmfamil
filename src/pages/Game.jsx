import { TextField } from "@mui/material"
import { useGameState } from "../logic/provider"

export default function GamePage(){
    const [state] = useGameState()

    return <table>
        <thead>
        <tr>
            <th>Player Name</th>
            <th>name</th>
            <th>lastname</th>
            <th>city</th>
            <th>color</th>
        </tr>
        </thead>
        <tbody>
            {state.map(s =>     
        <tr key={s.name}>
            <td>{s.name}</td>
            <td>
                <TextField/>
            </td>
            <td>
                <TextField/>
            </td>
            <td>
                <TextField/>
            </td>
            <td>
                <TextField/>
            </td>
        </tr>
                )}
        </tbody>
    </table>
}
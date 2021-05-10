import useCopyToClipboard from "../hooks/useCopyToClipboard";
import {Button} from 'react-bootstrap';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    button_copy: {
        padding: "15px 45px",
        textAlign: "center",
        margin: "0 auto",
        display: "block",
        background: "#EEF2FE",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        fontWeight: 500,
        fontSize: "22px",
        color: "#567BF3",
        marginBottom: "50px"
    }
}));

interface IProps {
    code: string
}

export function CopyButton({ code }: IProps) {
    const classes = useStyles();
    const [isCopied, handleCopy] = useCopyToClipboard(3000);

    return (
        <>
            <button className={classes.button_copy} onClick={() => handleCopy(code)}>
                Копіювати посилання для дуелі
                {/*{isCopied ? "Success" : "Copy"}*/}
            </button>
        </>

    );
}
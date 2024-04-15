import { useParams } from "react-router-dom";

const MessageError = () => {
    const { name } = useParams();
    return (
        <div>
            <h1>Este {name} no existe</h1>
        </div>
    );
};

export default MessageError;
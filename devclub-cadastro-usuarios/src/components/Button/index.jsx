import PropTypes from "prop-types";

import { Button } from "./styles";

function DefaultButton({children, theme, ...props}){
//spread operator para passar as props para o componente Button

    return(
        <Button {...props} theme={theme}>
            {children}
        </Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton   
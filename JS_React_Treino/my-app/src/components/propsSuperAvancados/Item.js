import PropTypes from 'prop-types';


function Item({marca, cor}){
    return (
        <>
            <p>Marca: {marca}, cor: {cor}</p>
        </>
    );
}

Item.propTypes = {
    marca: PropTypes.string,
    cor: PropTypes.string.isRequired
}

Item.defaultProps = {
    cor: "rosa"
}

export default Item;
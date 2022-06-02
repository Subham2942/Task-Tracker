import PropTypes from 'prop-types';
import Button from'./Button';

const Header = ({name,onAdd,showAdd}) => {
  return (
    <header className="header">
        <h1>{name}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close':'Add'} onAdd={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    name: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string,
}

export default Header
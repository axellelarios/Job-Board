
import Title from './title'

const Header = (props) => {

    return (
        <header>
           <Title text={props.title}/>
        </header>
    )  
}

export default Header
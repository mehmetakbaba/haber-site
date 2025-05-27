import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectCountry, getSelectCountry } from './slice/SelectSlice';

function CountryButton({tr,usa,fr,fi}) {
    const dispatch = useDispatch();
    const country = useSelector(getSelectCountry);
    const countryName = country === "tr-TR" ? "Türkiye" : country === "en-US" ? "USA": country === "fi-FI" ? "Suomi " : "France";
    return ( 
      
        <DropdownButton id="dropdown-item-button" title={countryName}>
            <Dropdown.Item onClick={() => dispatch(setSelectCountry("tr-TR"))} as="button">{tr}</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(setSelectCountry("en-US"))} as="button">{usa}</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(setSelectCountry("fr-FR"))} as="button">{fr}</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(setSelectCountry("fi-FI"))} as="button">{fi}</Dropdown.Item>
            
        </DropdownButton>
        
      
     );
}

export default CountryButton;
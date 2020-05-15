import React ,{useState ,useEffect} from 'react';
import {NativeSelect , FormControl} from '@material-ui/core';
import { fetchCountryData } from '../../api'
import styles from'./countrypicker.module.css'

const CountryPicker =({handleChange})=>{
const [fetchedCountries ,setFetchedCountrires] = useState([]);

useEffect(()=>{
        const fetchAPI = async ()=>{
            setFetchedCountrires(await fetchCountryData());
        }

        fetchAPI();
    },[]);
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>{handleChange(e.target.value)}} >
                <option value="">Select the countries</option>
    {fetchedCountries.map((c,i)=><option key={i} value={c}>{c}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
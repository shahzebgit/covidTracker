import React from "react";

import { Cards, Charts, CountryPicker ,Footer} from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

import coronaImage from "./images/covid.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount(country) {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  handleChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleChange={this.handleChange} />
        <Charts
          data={data}
          country={country}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;

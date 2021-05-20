import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import ResultsTable from "./ResultsTable";
import API from "../utils/API";

class DirectoryContainer extends Component {
    state = {
      results: [],
      search: ""
    };

    componentDidMount() {
        this.displayAll();
      }
    
    searchEmployees = (employee) => {
        console.log(employee);
        const foundEmployee = this.state.results.filter(r => r.name.first.startsWith(employee));
        this.setState({results: foundEmployee});
        console.log(foundEmployee);
    }

    displayAll = () => {
        API.search()
          .then((res) => {
              this.setState({ results: res.data.results });
          }
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return(
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>Employee Directory</h1>
                        <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <SearchForm
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <ResultsTable results={[...this.state.results]} />
                    </Col>
                </Row>
            </Container>
        )
        
    }

}

export default DirectoryContainer;
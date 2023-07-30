import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [], 
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3386ba9149d84d12b48a41d9ca4b825f";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

  render() {
    return (
      <div className='container my-4'>
        <h1>NewsPandas :- Top Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <Newsitem
                  title={element.title?element.title.slice(0,44):""}
                  description={element.description?element.description.slice(0.88):""}
                  urlToImage={element.urlToImage} 
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <Newsitem/>
      </div>
    );
  }
}

export default News;

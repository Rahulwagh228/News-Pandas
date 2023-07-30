import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, urlToImage, newsurl} = this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
      <img src={!urlToImage?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_E21EbyIpLutzSoftgE3K5eiKQOcUsqDsog&usqp=CAU":urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}..</h5>
        <p className="card-text">{description}..</p>
        <a href={newsurl} className="btn btn-sm btn-primary">Read More </a>
      </div>
</div>
      </div>
    )
  }
}

export default Newsitem
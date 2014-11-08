/** @jsx React.DOM */

var Container = React.createClass({
  render: function(){
    var hijos = this.props.hijos.map( function(child){
      return <PinData  {...child}
                       key={child.id}/>;
    });
    return(
      <div id="react-container">
        {hijos}
      </div>
    );
  }
});

var PinData = React.createClass({
  getDefaultProps: function(){
    return {
      "id": 1,
      "url": "#",
      "tit": "Titulo",
      "body": "Something, something",
      "imgs": ["http://qhapaq-nan.org/images/stories/com_form2content/p1/f22/2.jpg"]
    };
  },
  render: function(){
    return(
      <div id={"literatura" + this.props.id} className="data-literaria team"
           style={ {"display": (this.props.id==0?"":"None")}}>
        <div className="team-photo lazyloaded">
          <img src={this.props.imgs[0]} />
        </div>

        <div id="info-lit" className="team-info">

          <span className="name">{this.props.tit}</span>
          <span className="role">{this.props.subti}</span>

        </div>

        <div id="texto-lit" className="team-text">
          {this.props.body}
          <br/>
          <a href={this.props.url}>{this.props.url}</a>
        </div>
      </div>
    );
  }
});

var raw_data =  $.ajax({
  dataType: "json",
  url: "js/lista_data.js",
  async: false
}).responseText;

var lista_data = JSON.parse(raw_data);

var container_element = <Container hijos={lista_data} />;
React.render( container_element, document.getElementById("pin_data"));

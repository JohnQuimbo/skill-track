import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skill from "./Skill"
import Navbar from "./Navbar"

const drumChallenges = [
  {
      id:1,
      text:"Set up your first drum set"
  },
  {
      id:2,
      text:"Learn how to properly grip sticks"
  },
  {
      id:3,
      text:"Hit drums with proper technique"
  },
  {
      id:4,
      text:"4/4 beat (1 +3 on Bass Drum/ 2 + 4 on snare)"
      //Song challenge(Wake Me Up When September Ends)
  },
  {
      id:5,
      text:"Learn Basic Rock beat"
      //Song challenge(Back in Black)
  }

]

class App extends React.Component {
  constructor(){
    super()    
    this.state = {
      count : 1   
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        count : prevState.count + 1
      }
    })
  };
  
  render(){
    const challenge = drumChallenges[this.state.count];
    return(
      <div className="App">
          <Skill 
            name="Drums" 
            imgUrl="https://images-na.ssl-images-amazon.com/images/I/81kXfzLBExL._SX425_.jpg" 
            level= {this.state.count}
            onClick={this.handleClick}  
          />

          <Skill 
            name="Guitar" 
            imgUrl="https://shop.r10s.jp/g-shop/cabinet/01423699/05045485/imgrc0071716146.jpg" 
            level= {this.state.count}
            onClick={this.handleClick}  
          />

          <Skill 
            name="Basketball" 
            imgUrl="https://cdn11.bigcommerce.com/s-2sxhiat0li/images/stencil/1280x1280/products/182/588/GL7X_AD__99451.1461966775.jpg?c=2&imbypass=on" 
            level= {this.state.count}
            onClick={this.handleClick}  
          />

          <Skill 
            name="Running" 
            imgUrl="http://www.pngall.com/wp-content/uploads/2/Runner-PNG-Free-Download.png" 
            level= {this.state.count}
            onClick={this.handleClick}  
          />

          <Skill 
            name="Cooking" 
            imgUrl="https://i.pinimg.com/originals/e8/01/49/e801493d8099d44b98089ff9c668409a.jpg"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

          <Skill 
            name="Skating" 
            imgUrl="https://images-na.ssl-images-amazon.com/images/I/51TT1JF5SXL.AC_SX215_.jpg"
            level= {this.state.count}
            onClick={this.handleClick}  
          />
          
          <Skill 
            name="Lifting" 
            imgUrl="https://www.greatestphysiques.com/wp-content/uploads/2017/05/omar-isuf-profile-picture-where-he-looks-up-posing-for-a-photo-and-showing-his-vascular-arms.jpg"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Coding" 
            imgUrl="https://pmcvariety.files.wordpress.com/2018/10/gabe_newell.png"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Songwriting" 
            imgUrl="http://images.nymag.com/images/2/daily/2010/11/23_justinvernon-silo_250x375.png"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Bass" 
            imgUrl="https://images-na.ssl-images-amazon.com/images/I/51M1lXSvk3L._SY879_.jpg"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Singing" 
            imgUrl="http://videos.usatoday.net/Brightcove2/29906170001/2015/12/29906170001_4652490544001_SINATRA.jpg"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Production" 
            imgUrl="https://i.pinimg.com/originals/13/1d/f0/131df0c1ddbb852ff64794effba9426a.png"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Meditation" 
            imgUrl="https://pm1.narvii.com/6201/2086be1842ab3bedb816cfb685e278c18c6476e4_hq.jpg"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Poi" 
            imgUrl="https://cdn.shopify.com/s/files/1/0058/9552/products/15c417e0f68d84129271adc49d843dda0c1d25b4.jpg?v=1512013174"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Origami" 
            imgUrl="https://cdn.shopify.com/s/files/1/0173/2227/8976/products/origami-crane-temporary-tattoos-easytatt-6802158616640.jpg?v=1548647249"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Fencing" 
            imgUrl="https://img.grouponcdn.com/deal/2d7pFMhHaoz6QMfAZwSJjphLwhJK/2d-2048x1242/v1/c700x420.jpg"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

           <Skill 
            name="Lacrosse" 
            imgUrl="https://d3tozviku84b32.cloudfront.net/wp-content/uploads/2018/10/StringKing-Womens-Complete2Pro-Midfield-Face-Strung-Black4000-1920x1920.jpg"
            level= {this.state.count}
            onClick={this.handleClick}  
          />

          <Skill 
            name="Yoga" 
            imgUrl="https://yt3.ggpht.com/a/AGF-l78f-KZSKoju7UMZlH7ohygbGgLaEycXY1UEQw=s900-c-k-c0xffffffff-no-rj-mo"
            level= {this.state.count}
            onClick={this.handleClick}  
          />
          

      </div>
    )
  }
}

export default App;

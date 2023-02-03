import React from "react";
import Pizzicato from 'pizzicato';
import { IconButton,Slider } from "@mui/material";
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';
import StopTwoToneIcon from '@mui/icons-material/StopTwoTone';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import {store} from "./store";
import "./App.css";

window.store = store;

const voice = new Pizzicato.Sound({source:"input"});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      voice:voice,
      select:"start",
      time:store.getState().reducer.time,
      decay:store.getState().reducer.decay,
      mix:store.getState().reducer.mix,
      revers:false,
      frequency:store.getState().reducer.frequency,
      peak:store.getState().reducer.peak
    }
  }

  selectZone(){
    let _contents = [];
    if(this.state.select === "start"){
      _contents.push(
        <PlayArrowTwoToneIcon style = {{fontSize:"90px",color:"white"}} onClick = {function(){
          this.setState({select:"stop"});
          this.micplay();
        }.bind(this)}/>
      );
    }
    else if(this.state.select === "stop"){
      _contents.push(
        <StopTwoToneIcon style = {{fontSize:"90px",color:"white"}} onClick = {function(){
          this.setState({select:"start"});
          this.micstop();
        }.bind(this)}/>
      );
    }
    return _contents;
  }

  micplay(){
    let reverb = new Pizzicato.Effects.Reverb({
      time:this.state.time,
      decay:this.state.decay,
      revers:this.state.revers,
      mix:this.state.mix
    });
    let lowerfilter = new Pizzicato.Effects.LowPassFilter({
      frequency:this.state.frequency,
      peak:this.state.peak
    });
    this.state.voice.addEffect(reverb);
    this.state.voice.addEffect(lowerfilter);
    this.state.voice.play();
  }

  micstop(){
    this.state.voice.stop();
    this.setState({voice:new Pizzicato.Sound({source:"input"})});
  }

  render(){
    return (
      <div className="main" style = {{width:"900px",height:"726px",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",fontFamily:"Black Ops One"}}>
        <div className="dragable" style={{width:"900px",height:"15px",backgroundColor:"black",WebkitAppRegion:"drag"}}></div>
        <div className="header" style={{width:"900px",height:"80px",backgroundColor:"",fontFamily:"Monoton",fontSize:"60px",color:"white",display:"flex",justifyContent:"center",userSelect:"none"}}>
        <MusicNoteRoundedIcon style={{fontSize:"40px",marginTop:"10px"}}></MusicNoteRoundedIcon><span>Audio  Effector</span><MusicNoteIcon style={{fontSize:"50px",marginTop:"30px"}}></MusicNoteIcon>
        </div>
        <div className="header" style={{width:"900px",height:"50px",backgroundColor:"",marginTop:"10px",color:"lime",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none"}}>
          <span style={{marginRight:"120px"}}>REVERB ZONE</span><span style={{marginLeft:"127px"}}>LOWFILTER ZONE</span>
        </div>
        <div className="contentsZone" style={{display:"flex"}}>
          <div className="reverbZone" style={{width:"300px",height:"545px",backgroundColor:"#222222",borderRadius:"2%",display:"flex",alignItems:"center",flexDirection:"column"}}>
            <div className="reverbStateZone" style={{width:"295px",height:"195px",backgroundColor:"gray",borderRadius:"2%",marginTop:"10px",display:"flex",justifyContent:"center",userSelect:"none"}}>
              <div className="reverbStateZoneWindow" style={{width:"290px",height:"190px",backgroundColor:"black",marginTop:"2.5px",display:"flex",justifyContent:"center",borderRadius:"1%"}}>
                <div className="reverbStateZoneWindowText" style={{width:"280px",height:"180px",backgroundColor:"black",color:"lime"}}>
                  <p style={{marginLeft:"10px"}}>Reverb : {this.state.time}</p>
                  <p style={{marginLeft:"10px"}}>Decay : {this.state.decay}</p>
                  <p style={{marginLeft:"10px"}}>mix : {this.state.mix}</p>
                  <p style={{marginLeft:"10px"}}>Revers : false<span className="blink">_</span></p>
                </div>
              </div>
            </div>
            <div className="reverbControlZone" style={{width:"290px",height:"320px",backgroundColor:"#333333",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"2%",marginTop:"5px",flexDirection:"column"}}>
              <div style={{display:"flex",justyfyContents:"center",alignItems:"center"}}>
                <Slider className="reverbTime" style={{width:"20px",height:"250px",color:"darkgray",marginRight:"20px"}}
                orientation="vertical"
                defaultValue={this.state.time*100}
                onChange={function(e){
                  store.dispatch({type:"timeSet",payload:e.target.value/100});
                  this.setState({time:store.getState().reducer.time});
                }.bind(this)}
                ></Slider>
                <Slider className="reverbDecay" style={{width:"20px",height:"250px",color:"darkgray",marginRight:"20px"}}
                orientation="vertical"
                defaultValue={this.state.decay*100}
                onChange={function(e){
                  store.dispatch({type:"decaySet",payload:e.target.value/100});
                  this.setState({decay:store.getState().reducer.decay});
                }.bind(this)}
                ></Slider>
                <Slider className="reverbMix" style={{width:"20px",height:"250px",color:"darkgray"}}
                orientation="vertical"
                defaultValue={this.state.mix*100}
                onChange={function(e){
                  store.dispatch({type:"mixSet",payload:e.target.value/100});
                  this.setState({mix:store.getState().reducer.mix});
                }.bind(this)}
                ></Slider>
              </div>
              <div style={{color:"teal",userSelect:"none"}}>
                <span style={{marginRight:"30px"}}>REV</span><span style={{marginRight:"30px"}}>DEC</span><span>MIX</span>
              </div>
            </div>
          </div>
          <div className="selectZone" style = {{width:"80px",height:"545px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <IconButton className="selectzone" >
                {this.selectZone()}
              </IconButton>
          </div> 
          <div className="lowerFilterZone" style={{width:"300px",height:"545px",backgroundColor:"#222222",borderRadius:"2%",display:"flex",alignItems:"center",flexDirection:"column"}}>
            <div className="lowerFilterStateZone" style={{width:"295px",height:"195px",backgroundColor:"gray",borderRadius:"2%",marginTop:"10px",display:"flex",justifyContent:"center",}}>
              <div className="lowerFilterStateZoneWindow" style={{width:"290px",height:"190px",backgroundColor:"black",marginTop:"2.5px",display:"flex",justifyContent:"center",borderRadius:"1%",userSelect:"none"}}>
                <div className="lowerFilterStateZoneWindowText" style={{width:"280px",height:"180px",backgroundColor:"black",color:"lime"}}>
                    <p style={{marginLeft:"10px",marginTop:"40px"}}>Frequency : {this.state.frequency}</p>
                    <p style={{marginLeft:"10px"}}>Peak : {this.state.peak}</p>
                    <p style={{marginLeft:"10px"}}>Revers : false<span className="blink">_</span></p>
                  </div>
                </div>
              </div>
              <div className="lowerFilterControlZone" style={{width:"290px",height:"320px",backgroundColor:"#333333",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"2%",marginTop:"5px",flexDirection:"column"
            }}>
                <div style={{display:"flex",justyfyContents:"center",alignItems:"center"}}>
                  <Slider className="lowerFilterFrequency" style={{width:"20px",height:"250px",color:"darkgray",marginRight:"20px"}}
                  orientation="vertical"
                  defaultValue={this.state.frequency/10}
                  onChange={function(e){
                    store.dispatch({type:"frequencySet",payload:e.target.value*10});
                    this.setState({frequency:store.getState().reducer.frequency});
                  }.bind(this)}
                  ></Slider>
                  <Slider className="lowerFilterPeak" style={{width:"20px",height:"250px",color:"darkgray"}}
                  orientation="vertical"
                  defaultValue={this.state.peak}
                  onChange={function(e){
                    store.dispatch({type:"peakSet",payload:e.target.value});
                    this.setState({peak:store.getState().reducer.peak});
                  }.bind(this)}
                  ></Slider>
                </div>
                <div style={{color:"teal",userSelect:"none"}}>
                  <span style={{marginRight:"30px",marginLeft:"5px"}}>FRQ</span><span>PEAK</span>
                </div>
              </div>
            </div>
          </div>
        <div className="footer" style={{width:"900px",height:"40px",backgroundColor:"",display:"flex",justifyContent:"center",alignItems:"center",color:"gray"}}>
          <p>made by MiniCastle.</p>
        </div>
      </div>
    );
  }
}
export default App;

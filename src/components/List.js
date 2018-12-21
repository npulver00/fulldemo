import React, {Component} from 'react';
import axios from "axios"

export default class List extends Component{
    constructor(){
        super();
        this.state={
            quoteList:null
        }
    }

    componentDidMount(){
       this.fetchQuotes();
    }

    fetchQuotes=()=>{
        axios.get("/api/quotes").then(response=>{
            this.setState({
                quoteList: response.data
            })
        })
    }





    render(){
        
    const{quoteList}  = this.state;

        return(
            <div>             
                {quoteList 
                    ? quoteList.map(quote=>{
                    return <div className="box">{quote.phrase}</div>
                })
             : <div>Waiting for Quotes</div>
            }
            </div>
        )
    }
}
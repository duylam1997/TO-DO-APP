import React, { Component } from 'react'
import './style.css'

// export default class HelloName extends Component {
//   constructor(props){
//       super(props)
//       this.props = props
//   }
  
  
//     render() {
//     return (
//         <>
//             <div>
//                 {this.props.name} - {this.props.age}
//             </div>
//             <div>
//                 {/* <h1 style={{color: 'red'}}>
//                     Tadaaa!
//                 </h1> */}
//                 <h1 className='hello'>
//                     Tadaaa!
//                 </h1>
//             </div>
//         </>
//     )
//   }
// }
export class Top extends Component {
      render() {
      return (
          <>
            <div className='header'>
                <h2 className='entro'>TO DO LIST APPLICATION</h2>
                <div className='add-task-wrapper'>
                    <input className='input--task' placeholder='Add new task in here'></input>
                    <button className='btn--pluss'>+</button>
                </div>
                <hr></hr>
            </div>
          </>
      )
    }
  }

export class Content extends Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        return(
            <>
                <div className='list-wrapper'>
                    <div className='list-item'>
                        <div><p>{this.props.name}</p></div>
                        <div className='item-item'>
                            <button className='btn--complete'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">…</svg>
                            </button>
                            <button className='btn--remove'>X</button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </>
        )
    }
}

class Footer extends Component {
    render(){
        return(
            <>

            </>
        )
    }
}




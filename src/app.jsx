import React, {Component} from 'react'
import CommentAdd from './components/comment-add'
import CommentList from './components/comment-list'

import './css/index.css'

export default class FromView extends Component {
  /*
  constructor (props) {
    super(props)
    this.state = {
      comments: [
        {
          username: 'Tom',
          content: 'react还行'
        },
        {
          username: 'Jack',
          content: '我不这么认为'
        },
        {
          username: 'Jock',
          content: 'I think so'
        }
      ]
    }
    this.addList = this.addList.bind(this)
  }*/
  //组件类和组件对象不是同一个，组件类是指申明的这个组件比如：FromView就是组件类而组件对象相当于this
  //给组件对象指定state属性，组件对象相当于this。不是FromView，这个是组件内
  state = {
    comments: [
      {
        username: 'Tom',
        content: 'react还行'
      },
      {
        username: 'Jack',
        content: '我不这么认为'
      },
      {
        username: 'Jock',
        content: 'I think so'
      }
    ]
  }

  // 添加评论
  addComment = (comment) => {
    const {comments} = this.state // 得到原来的状态
    comments.unshift(comment) // 修改状态的内容
    this.setState({comments}) // 更新状态
  }

  // 删除指定评论
  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)
    this.setState({comments})
  }

  render () {
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment}/>
          <CommentList comments={comments}  deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}
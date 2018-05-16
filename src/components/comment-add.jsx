import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../css/index.css'

export default class commentAdd extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  state = {
    username: '',
    content: ''
  }

  handleSubmit = () => {
    // 收集数据，并封装成comment对象
    const comment = this.state
    let bool = false
    // 更新状态
    for (let i in comment) {
      if (comment[i] === '') {
        bool = true
        break
      }
    }
    if (!bool) {
      this.props.addComment(comment)
    }
    // 清除输入数据
    this.setState({
      username: '',
      content: ''
    })
  }

  handleNameChange = (event) => {
    const username = event.target.value
    //这里之所以是{username}是因为state里面有个username属性和我们定义的username属性名称一样
    this.setState({username})
  }

  handleContentChange = (event) => {
    const content = event.target.value
    //这里之所以是{content}是因为state里面有个content属性和我们定义的content属性名称一样
    this.setState({content})
  }

  render () {
    const {username, content} = this.state
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名"
                    value={username} onChange={this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" 
                    value={content} onChange={this.handleContentChange}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
/*
commentAdd.propTypes = {
  addList: propTypes.func.isRequired
}
*/
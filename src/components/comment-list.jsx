import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentLitem from './comment-item'
import '../css/commentList.css'

export default class commentList extends Component {

  // static是指给组件类指定属性添加
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  render () {
    const {comments, deleteComment} = this.props
    //计算出是否显示
    const display = comments.length === 0 ? 'block' : 'none'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((fcomment,index) =>  <CommentLitem comment={fcomment} key={index} deleteComment={deleteComment} index={index}/>)
          }
        </ul>
      </div>
    )
  }
}
/*
commentList.propTypes = {
  comments: PropTypes.array.isRequired
}
*/
/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');
var File = require('./File');


var Google = React.createClass({

  //try wrapping what is being returned in parens
  // Need this, but throwing errors...
    // var fileListItems = this.props.googleFileList.map(function(item) {
    //   return <li><File data={item} /></li>;
    // });
        // This should go inside the ul, instead of just <File />
          // {fileListItems}
  render:function(){
    console.log('this.props within Google.js');
    console.log(this.props);
    // var fileListToDisplay = 
    //   this.props.displayedGoogleFileList.map(function(file) {
    //     return (
    //       <li>
    //         <File data={file} />
    //       </li>
    //     );
    //   });
          //this should go inside the ul file-list
          // {fileListToDisplay}
    return (
      <div className="files-container" id="google-container">
        <h3 className='service-title'>Google Drive</h3>
        <ul className="file-list">
        </ul>
      </div>
    );
  },

});

//example pattern from tutorial: 
// render: function() {
//   var commentNodes = this.props.data.map(function (comment) {
//     return (
//       <Comment author={comment.author}>
//         {comment.text}
//       </Comment>
//     );
//   });
//   return (
//     <div className="commentList">
//       {commentNodes}
//     </div>
//   );
// }

module.exports = Google;
function addComment() {
  event.preventDefault();

  let bodyText = document.querySelector('#commentText').value;
  let commenter = document.querySelector('#commenterName').value;

  let commentBody = createCommentBody(bodyText);
  let commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}

function createCommentBody(comment) {
  let bodyDiv = document.createElement("div");
  let bodyPara = document.createElement("p");

  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);

  return bodyDiv;
}

function createCommenterLabel(commenter) {
  let commenterDiv = document.createElement('div');
  let commenterLabelPara = document.createElement('p');
  let commenterNameSpan = document.createElement('span');

  commenterLabelPara.innerHTML = "posted by: ";
  commenterNameSpan.innerHTML = commenter;

  commenterLabelPara.appendChild(commenterNameSpan);
  commenterDiv.appendChild(commenterLabelPara);

  return commenterDiv;
}

function postNewComment(commentBody, commenterLabel) {
  let commentsDiv = document.querySelector('#comments')
  let newCommentsDiv = document.createElement('div');

  newCommentsDiv.appendChild(commentBody);
  newCommentsDiv.appendChild(commenterLabel);

  commentsDiv.appendChild(newCommentsDiv);
}

$(document).on('turbolinks:load',function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message"data-group-id="${ message.group_id }" data-id="${ message.id }">
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.date}
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.date}
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }   
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "GET",
      data: {id: last_message_id, group: group_id},
      dataType: 'json',
    })
    .done(function(messages){
      if(messages != "null") {
        $.each(messages, function(i, message){
          var html = buildHTML(message);
          $('.messages').append(html);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
        });
      } else if(messages.length == 0){
      }
    })
    .fail(function() {
      alert('自動更新に失敗しました')
    });
  });
})
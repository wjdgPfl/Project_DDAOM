window.onload = function(){
    function id_overlap_check() {

        $('.userId_input').change(function () {
          $('#id_check_sucess').hide();
          $('.id_overlap_button').show();
          $('.userId_input').attr("check_result", "fail");
        })
    
    
        if ($('.userId_input').val() == '') {
          alert('이메일을 입력해주세요.')
          return;
        }
    
        id_overlap_input = document.querySelector('input[name="id"]');
    
        $.ajax({
          url: "{% url 'lawyerAccount:id_overlap_check' %}",
          data: {
            'id': id_overlap_input.value
          },
          datatype: 'json',
          success: function (data) {
            console.log(data['overlap']);
            if (data['overlap'] == "fail") {
              alert("이미 존재하는 아이디 입니다.");
              id_overlap_input.focus();
              return;
            } else {
              alert("사용가능한 아이디 입니다.");
              $('.userId_input').attr("check_result", "success");
              $('#id_check_sucess').show();
              $('.id_overlap_button').hide();
              return;
            }
          }
        });
      }
}
if ($('.username_input').attr("check_result") == "fail"){
    alert("아이디 중복체크를 해주시기 바랍니다.");
    $('.username_input').focus();
    return false;
  }
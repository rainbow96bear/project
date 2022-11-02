# project
## **1. todo_list**
  * 10/16
    * 화면의 색상을 변경하고 불필요한 코드와 약간의 간소화 진행 후 저장
  * 10/17
    * 할 일 저장 시 이름이 이전에 저장된 할 일의 이름에 있을 경우 alert뜨도록 수정<br>
    * 한 일을 localStorage에 저장하도록 하여 한 일을 보고 싶을 떄마다 자동으로 불러오도록 수정<br>
    * push후 한 일이 없는 경우 한 일을 확인 시 오류가 뜨는 것을 발견하여 수정 후 다시 push
  * 10/19
    * 할 일을 저장하고 불러오는 것이 아니라 프로그램 실행시 이전에 추가해두었던 할 일들이 자동으로 불러와지도록 수정
    * 캐릭터 레벨과 경험치가 유지되도록 수정
    * 진행도가 적용되는 것이 약간 이상했던 것을 수정
    * 체크박스를 누르면 바로바로 적용되도록 수정
  * 10/23
    * 세부사항 창을 초기화 하는 방법을 세부사항 창 안에 세부사항을 감싸는 div를 삭제 하는 방법에서 innerHTML=""; 으로 변경하여 코드를 줄였습니다.
    * 이전에 선언한 지역변수 중에 코드가 수정되며 사용하지 않는 지역변수 선언을 삭제
  * 10/25
    * axios를 이용하여 로그인과 회원가입 기능을 만듬
    * fs를 이용하여 회원가입한 정보를 json파일을 생성하여 저장하도록 만듬
  * 앞으로 할 일 : <br>-지금까지 한 일 창 글씨체 수정,<br>-할 일 저장을 localStorage가 아닌 서버에 저장하는 방식으로 변경

## **2. postingWeb**
 * 10/27
    * 로그인과 회원가입 기능이 있는 페이지 구현
    * 글을 올리는 페이지를 따로 만들어 로그인 후 글 쓰기 버튼을 누르면 이동하도록 설정
    * 등록한 글을 메인 화면에서 볼 수 있도록 구현
    * 글을 올린 날짜와 작성자가 표시되도록 구현
    * jwt의 만료시간을 30분으로 설정하여 30분 이내에 재 접속시 로그인 상태가 유지되도록 구현
    * jwt가 만료 된 이후 글을 작성하려고 하면 로그인이 만료되어서 글을 못쓰도록 구현
  * 11/02
    * socket.io를 통하여 로그인 하여 채팅을 할 수 있는 기능 구현
    * 회원가입정보를 json파일이 아닌 mysql을 연동하여 저장하도록 변경
    * 로그인시 json파일을 불러오는 것이 아닌 mysql의 db에서 확인하여 로그인 하도록 변경
  * 앞으로 할 일 : 
    * 토큰을 하나 더 생성하여 로그인 시간을 연장할 수 있도록 하기
    * 로그인 시간 만료시 자동 로그아웃
    * 댓글을 달 수 있게 만들기
    * 작성자는 자신의 글에서 수정과 삭제 버튼이 보이도록 만들기
    * 작성자의 수정 삭제 기능
    * 작성한 글들을 mysql db에 저장하도록 변경

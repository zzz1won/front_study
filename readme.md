# 제목입니다.
## 제목입니다.
### 제목입니다.
#### 제목입니다.
### 각자 github에 front_study 라는 repository를 만들어서 현재 폴더를 git에 업로드하세요...
- 식빵은 맛있엉
    - 스프도 맛있엉
1. 아침을 먹고있습니다.
1. 세탁기도 돌렸습니다.

```
int i = 0;
```

1. git hub repository 생성
1. 내 pc username, usermai 확인
1. git으로 지정할 폴더 cmd 접속
1. git init
1. git remote add origin 'git hub repo 주소'
1. 올릴 파일 지정
    - git hub
1. git commit -m '커밋메시지'
1. git push origin main

# 수업내용 정리
##  front 1일차(20211109)
### 인라인요소 (inline element), 블록요소(block element)
1. 인라인요소
    - 태그내용을 표현하고 줄이 바뀌지 않음
    - 보통 텍스트 내용만큼만 영역을 차지하게 됨
    - 가로, 세로 크기를 따로 지정할 수 없음
        - 가로, 세로 크기를 따로 지정하고 싶으면 css로 블록요소 지정해야함.
    - 대표적인 인라인 태그
        - span, a 등

2. 블록요소
    - 태그 내용을 표현하고 줄이 바뀜
    - 텍스트 내용과는 상관없이 한 줄을 모두 차지함
    - 가로, 세로 크기를 지정할 수 있음
    - 대표적인 블록 태그
        - div, h1~h6 등


### 주로 사용하게 될 태그
 ```
    - <style>, <script>, <h1>, <p>, <div>
    - <from>, <input>, <button>, <selcet>
```

### UI / UX
- UI (user interface): 화면, GUI (graphical user interface). 얼마나 보기 좋은가
- UX (user experience): 사용자 경험, 얼마나 사용하기 좋은가

### 경로 지정시 사용하는 방법
- ./ : 현재 파일이 있는 폴더를 가리킴.
- ../ : 현재 폴더에서 한 수준 위로 올라가는 폴더를 가리킴.


### form 태그
1. form 시작태그에 작성하는 속성
```
<form action = "주소값" method = "get or post">
```
    - action : form 태그에 작성된 내용을 전송 할 주소
        - 보통 백엔드에서 받는 주소를 사용함.
        - 백엔드에는 해당 주소를 처리해주는 컨트롤러 클래스의 메서드가 있음.

    - method : action에 작성한 주소로 데이터를 전송할 때 사용할 전송방식
        - 여기서 전송방식이라는 것은 http 프로토콜의 전송방식을 의미함.
        - http 전송방식 _ rest api
            - get : read 역할 (select)
                - 주소창에 전송하는 데이터가 모두 노출 됨.
                - 검색어 또는 데이터가 노출되어도 문제 없는 상황에서 사용
            - post : create 역할 (insert)
                - 주소창에 전송하는 데이터가 노출되지 않음.
                - 회원가입, 로그인 등 노출되지 않아야 하는 상황에서 사용.
            - put : update 역할 (update)
            - delete : delete 역할 (delete)
        - http(hyper text transfer protocol) : 인터넷 상에서 정보를 주고받는 프로토콜
            - http는 대부분 요청(request) req /응답(response) res 이 있다.
                - 보통 요청 : frontend (client) - > backend (server) / 응답 : backend(server) -> frontend (client)
                    - client : html, css, javascript
                    - server : java, db
                - 우리가 인터넷을 한다는 것은 서버에 요청을 하는 것이고, 그에 대한 결과를 화면으로 보는 것이 응답이다.
                - 따라서 인터넷을 할 때 주소창에 http://가 붙는 것이 이 이유이다.
                    - https 는 s : secure(보안)이 추가됐다고 보면 된다.
            - 프로토콜 : 특정 통신 방식에서 규정하는 규칙을 의미
            - ftp, tcp, ip등에 붙는 p는 모두 프로토콜

2. input tag
- type 속성
    - type: 텍스트 입력칸이 만들어짐, # input type text + name
    - submit: from 태그에 작성한 내용을 action 속성에 작성한 주소로 보낼 수 있음

- 네이버 검색창을 분석해보자
    - 네이버 검색 요청 주소: search.naver
    - 검색어를 담는 파라미터 이름: query
    - 검색 요청 방식: get


3. 이름을 일관성 있게
- front 화면의 name 속성값, DTO 클래스 필드이름, DB 컬럼명을 모두 동일하게 가는 것이 정신건강에 좋다.


4. CSS는 Bootstrap을 주로 이용할 계획



##  front 2일차(20211110) - js
1. js framework
- react.js, node.js, vue.js~~


##  front 3일차(20211110) - js
1. javascript function
- 함수 (자바의 메소드와 비슷...)
- 특정 기능을 수행하는 코드 블록
- 호출을 해줘야 실행이 됨.
- 특정 이벤트가 발생했을 때 함수를 호출
    - 특정이벤트란...
        - click, duobleclick, mouse over, writing, keyup, keydown
- 매개변수, 리턴 등이 있음.

2. id속성 / class속성
- id속성
    - css 적용할 때 많이 사용, javaScript에서 제어할 때도 사용
    - 한 문서 안에서 id 속성값은 유일해야한다.
- class속성
    - css 적용할 때 많이 사용함.
    - 여러 태그에 동일한 class 값을 적용할 수 있다.
    - 한번에 여러 class를 동시에 적용할 수 있다.
        - ex) p태그에 class1, class2, class3를 동시에 적용하고 싶다면
        ```
        <p class = "class1 class2 class3"></p>
        ```


3. DOM 가져오기
- 대부분 document. 으로 시작함.
    - document는 현재 html 문서를 가리킴.
- getElementById('id속성값')
    - 현재 html에 작성된 태그 중 특정 id속성값을 가지고 있는 요소를 가져옴.
- querySelector()
    - id, class, 태그 등 여러 요소를 가져올 수 있음.
    - id를 가져올 때는 id 앞에 #을 붙여야 함.
        - ex) id1  이라는 요소를 가져온다면 document.querySelector('#id1')
    - class를 가져올 때는 class 앞에 . 을 붙여야 함.
        - ex) class1 이라는 요소를 가져온다면 document.querySelector(',class')
- getElementsByClassName()
    - 현재 html에 작성된 태그 중 특정 class속성값을 가지고 있는 요소를 가져옴.
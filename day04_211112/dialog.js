// id 2가 적용된 요소(body영역에 작성된 태그)를 가져온다.
const btn1 = document.getElementById('id2');
console.log('btn1값: ', btn1);
// id 3가 적용된 요소(body영역에 작성된 태그)를 가져온다.
const btn2 = document.getElementById('id3');
console.log('btn2값: ', btn2);

/* addEventListener를 이용하여
id2가 적용 된 버튼을 클릭했을 때 익명함수 호출
*/

btn1.addEventListener('click',function(){
    console.log('id2버튼 클릭함.');
    const result = confirm('confirm은 뭘까용');
        if(result)  {
            console.log('확인')
        }  else {
            console.log('취소')
        }
});



/* addEventListener를 이용하여
id3가 적용 된 버튼을 클릭했을 때 promptFunction 호출
*/
btn2.addEventListener('click', promptFuntion);


function alertFuntion () {
    console.log ('alertFuntion 함수 호출됨')
    alert("하이요")
}

function promptFuntion ()    {
    console.log("PromptFunction 함수호출 됨");
}
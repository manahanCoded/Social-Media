let available_keywords = ["Juice wrld", "My Eyes","She Knows", "Capo", 
                            "9 AM", "All for Us", "Creepin", "SDP", "I Know"];


const resultBox = document.querySelector(".result_box");
const inputBox = document.querySelector("#input_box");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = available_keywords.filter((keyword)=>{
     return keyword.toLowerCase().includes(input.toLowerCase());
    });
    
  }
  display(result);

  if(!result.length){
    resultBox.innerHTML ='';
  }
}

function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultBox.innerHTML = "<ul>"+ content.join('') +"</ul>"
}

function selectInput(list){
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = '';
}



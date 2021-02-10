document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    const personalSkill = [ "I am...", "Professional", "Fast learner", "Team or Individual Working", "Self-Motivated", "Able to learn new thing", "Good communication"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(".personal-skill").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof personalSkill[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 5000);
       }
       // check if personalSkill[i] exists
      if (i < personalSkill[i].length) {
        // text exists! start typewriter animation
       typeWriter(personalSkill[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });